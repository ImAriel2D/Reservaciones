import React from 'react';
import PropTypes from 'prop-types';

import NumberPicker from 'Components/NumberPicker/NumberPicker';
import SubmitForm from 'Components/SubmitForm';

import './styles/reservationForm.scss';

const RoomsFormComponent = ({
  rooms,
  handleSubmitForm,
  handleDecreaseSimpleRoom,
  handleDecreaseDoubleRoom,
  handleDecreaseMasterRoom,
  handleDecreaseSuiteRoom,
  handleIncreaseSimpleRoom,
  handleIncreaseDoubleRoom,
  handleIncreaseMasterRoom,
  handleIncreaseSuiteRoom,
}) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de los cuartos">
    <NumberPicker
      placeHolder="Cuartos simples"
      value={rooms.simple}
      handleIncrease={handleIncreaseSimpleRoom}
      handleDecrease={handleDecreaseSimpleRoom}
    />

    <NumberPicker
      placeHolder="Cuartos Doble"
      value={rooms.double}
      handleIncrease={handleIncreaseDoubleRoom}
      handleDecrease={handleDecreaseDoubleRoom}
    />

    <NumberPicker
      placeHolder="Cuartos Master"
      value={rooms.master}
      handleIncrease={handleIncreaseMasterRoom}
      handleDecrease={handleDecreaseMasterRoom}
    />
    <NumberPicker
      placeHolder="Cuartos Suite"
      value={rooms.suite}
      handleIncrease={handleIncreaseSuiteRoom}
      handleDecrease={handleDecreaseSuiteRoom}
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
  handleSubmitForm: PropTypes.func.isRequired,
  handleDecreaseSimpleRoom: PropTypes.func.isRequired,
  handleDecreaseDoubleRoom: PropTypes.func.isRequired,
  handleDecreaseMasterRoom: PropTypes.func.isRequired,
  handleDecreaseSuiteRoom: PropTypes.func.isRequired,
  handleIncreaseSimpleRoom: PropTypes.func.isRequired,
  handleIncreaseDoubleRoom: PropTypes.func.isRequired,
  handleIncreaseMasterRoom: PropTypes.func.isRequired,
  handleIncreaseSuiteRoom: PropTypes.func.isRequired,
};

export default RoomsFormComponent;
