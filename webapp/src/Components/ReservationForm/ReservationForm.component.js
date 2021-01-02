import React from 'react';
import PropTypes from 'prop-types';

import NumberPicker from '../NumberPicker';

import './styles/reservationForm.scss';

const ReservationFormComponent = ({ rooms, setRooms }) => (
  <form id="reservation-form">
    <h1>Información de la reservación</h1>
    <span>Fecha de entrada</span>
    <input type="date" />
    <span>Fecha de salida</span>
    <input type="date" />
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
  </form>
);

ReservationFormComponent.propTypes = {
  rooms: PropTypes.shape({
    simple: PropTypes.number.isRequired,
    double: PropTypes.number.isRequired,
    master: PropTypes.number.isRequired,
    suite: PropTypes.number.isRequired,
  }).isRequired,
  setRooms: PropTypes.func.isRequired,
};

export default ReservationFormComponent;
