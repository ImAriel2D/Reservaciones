import React from 'react';
import { useDispatch } from 'react-redux';

import { setAppIsLoading } from '../../store/actions/appActions';
import { executePayment } from '../../store/actions/paymentActions';

import PaymentComponent from './Payment.component';

const PaymentContainer = () => {
  const dispatch = useDispatch();

  const handlePayment = (e) => {
    e.preventDefault();
    dispatch(executePayment());
    dispatch(setAppIsLoading(true));
  };

  return (
    <PaymentComponent
      handleSubmitForm={handlePayment}
    />
  );
};

export default PaymentContainer;
