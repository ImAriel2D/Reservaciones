import React, { useState } from 'react';

import RoomsFormComponent from './RoomsForm.component';

const RoomsFormContainer = () => {
  const [rooms, setRooms] = useState({
    simple: 0,
    double: 0,
    master: 0,
    suite: 0,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(rooms);
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
