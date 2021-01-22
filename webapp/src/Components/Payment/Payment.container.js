import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAppIsLoading } from 'store/actions/appActions';
import { executePayment } from 'store/actions/paymentActions';

import { formatter } from 'utils/formatter';

import PaymentComponent from './Payment.component';

const PaymentContainer = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    number: '',
    cvv: '',
    name: '',
    month: 0,
    year: 0,
  });

  const payment = useSelector((state) => state.payment);
  const dispatch = useDispatch();

  const moneyFormat = formatter.format(payment.get('total'));

  const handlePayment = (e) => {
    e.preventDefault();

    dispatch(setAppIsLoading(true));
    dispatch(executePayment(paymentInfo));
  };

  return (
    <PaymentComponent
      handleSubmitForm={handlePayment}
      setPaymentInfo={setPaymentInfo}
      total={moneyFormat}
      paymentInfo={paymentInfo}
    />
  );
};

export default PaymentContainer;
