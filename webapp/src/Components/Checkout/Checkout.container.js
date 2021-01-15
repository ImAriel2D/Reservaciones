import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  ROOM_SIMPLE_PRICE,
  ROOM_DOUBLE_PRICE,
  ROOM_MASTER_PRICE,
  ROOM_SUITE_PRICE,
} from 'roomPrices';

import { increaseIndex } from 'store/actions/formActions';

import CheckoutComponent from './Checkout.component';

const CheckoutContainer = () => {
  const rooms = useSelector((state) => state.rooms);
  const numberOfNights = useSelector((state) => state.dates.get('numberOfNights'));

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(increaseIndex());
  };

  const simpleTotal = ROOM_SIMPLE_PRICE * rooms.get('simple') * numberOfNights;
  const doubleTotal = ROOM_DOUBLE_PRICE * rooms.get('double') * numberOfNights;
  const masterTotal = ROOM_MASTER_PRICE * rooms.get('master') * numberOfNights;
  const suiteTotal = ROOM_SUITE_PRICE * rooms.get('suite') * numberOfNights;
  const total = simpleTotal + doubleTotal + masterTotal + suiteTotal;

  return (
    <CheckoutComponent
      handleSubmitForm={handleSubmitForm}
      rooms={rooms}
      simpleTotal={simpleTotal}
      doubleTotal={doubleTotal}
      masterTotal={masterTotal}
      suiteTotal={suiteTotal}
      total={total}
    />
  );
};

export default CheckoutContainer;
