import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { increaseIndex } from '../../store/actions/formActions';
import setStoredRooms from '../../store/actions/roomsActions';

import RoomsFormComponent from './RoomsForm.component';

const RoomsFormContainer = () => {
  const storedRooms = useSelector((state) => state.rooms);

  const [rooms, setRooms] = useState({
    simple: storedRooms.get('simple'),
    double: storedRooms.get('double'),
    master: storedRooms.get('master'),
    suite: storedRooms.get('suite'),
  });

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(increaseIndex());
    dispatch(setStoredRooms(rooms));
  };

  const handleDecreaseSimpleRoom = () => {
    if (rooms.simple - 1 >= 0) {
      setRooms({ ...rooms, simple: rooms.simple - 1 });
    }
  };

  const handleIncreaseSimpleRoom = () => {
    setRooms({ ...rooms, simple: rooms.simple + 1 });
  };

  const handleDecreaseDoubleRoom = () => {
    if (rooms.double - 1 >= 0) {
      setRooms({ ...rooms, double: rooms.double - 1 });
    }
  };

  const handleIncreaseDoubleRoom = () => {
    setRooms({ ...rooms, double: rooms.double + 1 });
  };

  const handleDecreaseMasterRoom = () => {
    if (rooms.master - 1 >= 0) {
      setRooms({ ...rooms, master: rooms.master - 1 });
    }
  };

  const handleIncreaseMasterRoom = () => {
    setRooms({ ...rooms, master: rooms.master + 1 });
  };

  const handleDecreaseSuiteRoom = () => {
    if (rooms.suite - 1 >= 0) {
      setRooms({ ...rooms, suite: rooms.suite - 1 });
    }
  };

  const handleIncreaseSuiteRoom = () => {
    setRooms({ ...rooms, suite: rooms.suite + 1 });
  };

  return (
    <RoomsFormComponent
      rooms={rooms}
      handleSubmitForm={handleSubmitForm}
      handleDecreaseSimpleRoom={handleDecreaseSimpleRoom}
      handleDecreaseDoubleRoom={handleDecreaseDoubleRoom}
      handleDecreaseMasterRoom={handleDecreaseMasterRoom}
      handleDecreaseSuiteRoom={handleDecreaseSuiteRoom}
      handleIncreaseSimpleRoom={handleIncreaseSimpleRoom}
      handleIncreaseDoubleRoom={handleIncreaseDoubleRoom}
      handleIncreaseMasterRoom={handleIncreaseMasterRoom}
      handleIncreaseSuiteRoom={handleIncreaseSuiteRoom}
    />
  );
};

export default RoomsFormContainer;
