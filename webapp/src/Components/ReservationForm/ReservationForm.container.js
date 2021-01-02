import React, { useState } from 'react';

import ReservationFormComponent from './ReservationForm.component';

const ReservationFormContainer = () => {
  const [rooms, setRooms] = useState({
    simple: 0,
    double: 0,
    master: 0,
    suite: 0,
  });

  return (
    <ReservationFormComponent
      rooms={rooms}
      setRooms={setRooms}
    />
  );
};

export default ReservationFormContainer;
