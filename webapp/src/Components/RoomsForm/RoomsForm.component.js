import React from 'react';
import PropTypes from 'prop-types';

import NumberPicker from '../NumberPicker';
import SubmitForm from '../SubmitForm';

import './styles/reservationForm.scss';

const RoomsFormComponent = ({ rooms, setRooms, handleSubmitForm }) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de los cuartos">
    <NumberPicker
      placeHolder="Cuartos Simples"
      max={20}
      min={0}
      handleSetValue={(e) => setRooms({ ...rooms, simple: parseInt(e.target.value, 10) })}
      value={rooms.simple}
    />
    <NumberPicker
      placeHolder="Cuartos Dobles"
      max={20}
      min={0}
      handleSetValue={(e) => setRooms({ ...rooms, double: parseInt(e.target.value, 10) })}
      value={rooms.double}
    />
    <NumberPicker
      placeHolder="Cuartos Master"
      max={20}
      min={0}
      handleSetValue={(e) => setRooms({ ...rooms, master: parseInt(e.target.value, 10) })}
      value={rooms.master}
    />
    <NumberPicker
      placeHolder="Cuartos Dobles"
      max={20}
      min={0}
      handleSetValue={(e) => setRooms({ ...rooms, suite: parseInt(e.target.value, 10) })}
      value={rooms.suite}
    />
  </SubmitForm>
);

RoomsFormComponent.propTypes = {
  rooms: PropTypes.shape({
    simple: PropTypes.number.isRequired,
    double: PropTypes.number.isRequired,
    master: PropTypes.number.isRequired,
    suite: PropTypes.number.isRequired,
  }).isRequired,
  setRooms: PropTypes.func.isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
};

export default RoomsFormComponent;
