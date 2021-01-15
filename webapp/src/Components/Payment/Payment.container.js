import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAppIsLoading } from 'store/actions/appActions';
import { executePayment } from 'store/actions/paymentActions';

import { formatter } from 'utils/formatter';

import PaymentComponent from './Payment.component';

const PaymentContainer = () => {
  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const moneyFormat = formatter.format(payment.get('total'));

  const handlePayment = (e) => {
    e.preventDefault();

    dispatch(executePayment());
    dispatch(setAppIsLoading(true));
  };

  return (
    <PaymentComponent
      handleSubmitForm={handlePayment}
      total={moneyFormat}
    />
  );
};

export default PaymentContainer;
