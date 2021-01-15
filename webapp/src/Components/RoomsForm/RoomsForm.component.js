import React from 'react';
import PropTypes from 'prop-types';

import {
  ROOM_SIMPLE_PRICE,
  ROOM_DOUBLE_PRICE,
  ROOM_MASTER_PRICE,
  ROOM_SUITE_PRICE,
} from 'roomPrices';

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
      placeHolder={`Cuartos simples $${ROOM_SIMPLE_PRICE}`}
      value={rooms.simple}
      handleIncrease={handleIncreaseSimpleRoom}
      handleDecrease={handleDecreaseSimpleRoom}
    />

    <NumberPicker
      placeHolder={`Cuartos Doble $${ROOM_DOUBLE_PRICE}`}
      value={rooms.double}
      handleIncrease={handleIncreaseDoubleRoom}
      handleDecrease={handleDecreaseDoubleRoom}
    />

    <NumberPicker
      placeHolder={`Cuartos Matrimonial $${ROOM_MASTER_PRICE}`}
      value={rooms.master}
      handleIncrease={handleIncreaseMasterRoom}
      handleDecrease={handleDecreaseMasterRoom}
    />
    <NumberPicker
      placeHolder={`Cuartos Matrimonial $${ROOM_SUITE_PRICE}`}
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
