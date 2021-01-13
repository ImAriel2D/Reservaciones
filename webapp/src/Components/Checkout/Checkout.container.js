import React from 'react';
import { useSelector } from 'react-redux';

import {
  ROOM_SIMPLE_PRICE,
  ROOM_DOUBLE_PRICE,
  ROOM_MASTER_PRICE,
  ROOM_SUITE_PRICE,
} from '../../roomPrices';

import CheckoutComponent from './Checkout.component';

const CheckoutContainer = () => {
  const rooms = useSelector((state) => state.rooms);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // console.log('paga paga paga!!!!!!!!');
  };

  const simpleTotal = ROOM_SIMPLE_PRICE * rooms.get('simple');
  const doubleTotal = ROOM_DOUBLE_PRICE * rooms.get('double');
  const masterTotal = ROOM_MASTER_PRICE * rooms.get('master');
  const suiteTotal = ROOM_SUITE_PRICE * rooms.get('suite');
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
