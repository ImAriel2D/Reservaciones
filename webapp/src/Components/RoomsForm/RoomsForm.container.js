import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { increaseIndex } from '../../store/actions/formActions';

import RoomsFormComponent from './RoomsForm.component';

const RoomsFormContainer = () => {
  const [rooms, setRooms] = useState({
    simple: 0,
    double: 0,
    master: 0,
    suite: 0,
  });

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(increaseIndex());
  };

  return (
    <RoomsFormComponent
      rooms={rooms}
      setRooms={setRooms}
      handleSubmitForm={handleSubmitForm}
    />
  );
};

export default RoomsFormContainer;
