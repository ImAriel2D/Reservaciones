import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RoomsFormComponent from './RoomsForm.component';

const RoomsFormContainer = ({ showNextForm }) => {
  const [rooms, setRooms] = useState({
    simple: 0,
    double: 0,
    master: 0,
    suite: 0,
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    showNextForm();
  };

  return (
    <RoomsFormComponent
      rooms={rooms}
      setRooms={setRooms}
      handleSubmitForm={handleSubmitForm}
    />
  );
};

RoomsFormContainer.propTypes = {
  showNextForm: PropTypes.func.isRequired,
};

export default RoomsFormContainer;
