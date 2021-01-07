import React from 'react';
import PropTypes from 'prop-types';

import NumberPicker from '../NumberPicker/NumberPicker';
import SubmitForm from '../SubmitForm';

import './styles/reservationForm.scss';

const RoomsFormComponent = ({ rooms, setRooms, handleSubmitForm }) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de los cuartos">
    <NumberPicker
      placeHolder="Cuartos simples"
      value={rooms.simple}
      handleIncrease={() => setRooms({ ...rooms, simple: rooms.simple + 1 })}
      handleDecrease={() => setRooms({ ...rooms, simple: rooms.simple - 1 })}
    />

    <NumberPicker
      placeHolder="Cuartos Doble"
      value={rooms.double}
      handleIncrease={() => setRooms({ ...rooms, double: rooms.double + 1 })}
      handleDecrease={() => setRooms({ ...rooms, double: rooms.double - 1 })}
    />

    <NumberPicker
      placeHolder="Cuartos Master"
      value={rooms.master}
      handleIncrease={() => setRooms({ ...rooms, master: rooms.master + 1 })}
      handleDecrease={() => setRooms({ ...rooms, master: rooms.master - 1 })}
    />
    <NumberPicker
      placeHolder="Cuartos Suite"
      value={rooms.suite}
      handleIncrease={() => setRooms({ ...rooms, suite: rooms.suite + 1 })}
      handleDecrease={() => setRooms({ ...rooms, suite: rooms.suite - 1 })}
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
