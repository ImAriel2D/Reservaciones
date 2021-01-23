import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

import RoomTotal from 'Components/RoomTotal';
import SubmitForm from 'Components/SubmitForm';
import Date from 'Components/Dates';
import Input from 'Components/Input';

import './styles/payment.scss';

const CheckoutComponent = ({
  dates,
  handleSubmitForm,
  rooms,
  simpleTotal,
  doubleTotal,
  masterTotal,
  suiteTotal,
  total,
  promotionCode,
  setPromotionCode,
  onClickFindPromotion,
}) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de la reservación">
    <RoomTotal
      numberOfRooms={rooms.get('simple')}
      roomType="Simple"
      total={simpleTotal}
    />
    <RoomTotal
      numberOfRooms={rooms.get('double')}
      roomType="Double"
      total={doubleTotal}
    />
    <RoomTotal
      numberOfRooms={rooms.get('master')}
      roomType="Master"
      total={masterTotal}
    />

    <RoomTotal
      numberOfRooms={rooms.get('suite')}
      roomType="Suite"
      total={suiteTotal}
    />
    <Date
      date={dates.get('entryDate')}
      dateName="Fecha llegada"
    />
    <Date
      date={dates.get('leavingDate')}
      dateName="Fecha salida"
    />

    <p className="total">
      Total:
      {' '}
      {total}
    </p>

    <div>
      <Input
        value={promotionCode}
        maxLength={10}
        placeHolder="Código de promoción"
        error={false}
        handleSetValue={(e) => setPromotionCode(e.target.value)}
      />

      <button type="button" onClick={onClickFindPromotion}>Activa promoción</button>
      <p>Sí la promoción es valida se vera reflejada en la siguiente ventana!</p>
    </div>
  </SubmitForm>
);

CheckoutComponent.propTypes = {
  dates: PropTypes.instanceOf(Map).isRequired,
  handleSubmitForm: PropTypes.func.isRequired,
  rooms: PropTypes.instanceOf(Map).isRequired,
  simpleTotal: PropTypes.number.isRequired,
  doubleTotal: PropTypes.number.isRequired,
  masterTotal: PropTypes.number.isRequired,
  suiteTotal: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  promotionCode: PropTypes.string.isRequired,
  setPromotionCode: PropTypes.func.isRequired,
  onClickFindPromotion: PropTypes.func.isRequired,
};

export default CheckoutComponent;
