import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';

import { increaseIndex } from 'store/actions/formActions';
import { fetchRooms, setStoredRooms } from 'store/actions/roomsActions';

import RoomsFormComponent from './RoomsForm.component';

const RoomsFormContainer = () => {
  const storedRooms = useSelector((state) => state.rooms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  const [rooms, setRooms] = useState({
    simple: storedRooms.get('simple'),
    double: storedRooms.get('double'),
    master: storedRooms.get('master'),
    suite: storedRooms.get('suite'),
  });

  const noRoomsAvailable = () => !rooms.simple && !rooms.double && !rooms.master && !rooms.suite;

  const handleSubmitForm = (e) => {
    e.preventDefault();

    if (noRoomsAvailable()) {
      swal({
        icon: 'info',
        text: 'Debes seleccionar al menos un cuarto.',
      });
    } else {
      dispatch(increaseIndex());
      dispatch(setStoredRooms(rooms));
    }
  };

  const handleDecreaseSimpleRoom = () => {
    if (rooms.simple - 1 >= 0) {
      setRooms({ ...rooms, simple: rooms.simple - 1 });
    }
  };

  const handleIncreaseSimpleRoom = () => {
    const simpleAvailable = storedRooms.getIn(['available', 'simple']);
    if (simpleAvailable > rooms.simple) {
      setRooms({ ...rooms, simple: rooms.simple + 1 });
    }
  };

  const handleDecreaseDoubleRoom = () => {
    if (rooms.double - 1 >= 0) {
      setRooms({ ...rooms, double: rooms.double - 1 });
    }
  };

  const handleIncreaseDoubleRoom = () => {
    const doubleAvailable = storedRooms.getIn(['available', 'double']);
    if (doubleAvailable > rooms.double) {
      setRooms({ ...rooms, double: rooms.double + 1 });
    }
  };

  const handleDecreaseMasterRoom = () => {
    if (rooms.master - 1 >= 0) {
      setRooms({ ...rooms, master: rooms.master - 1 });
    }
  };

  const handleIncreaseMasterRoom = () => {
    const masterAvailable = storedRooms.getIn(['available', 'master']);
    if (masterAvailable > rooms.master) {
      setRooms({ ...rooms, master: rooms.master + 1 });
    }
  };

  const handleDecreaseSuiteRoom = () => {
    if (rooms.suite - 1 >= 0) {
      setRooms({ ...rooms, suite: rooms.suite - 1 });
    }
  };

  const handleIncreaseSuiteRoom = () => {
    const suiteAvailable = storedRooms.getIn(['available', 'suite']);
    if (suiteAvailable > rooms.suite) {
      setRooms({ ...rooms, suite: rooms.suite + 1 });
    }
  };

  return (
    <RoomsFormComponent
      rooms={rooms}
      roomsAvailable={storedRooms}
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
