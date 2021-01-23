import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setAppIsLoading } from 'store/actions/appActions';
import { executePayment, activatePromotion } from 'store/actions/paymentActions';

import { formatter } from 'utils/formatter';

import PaymentComponent from './Payment.component';

const PaymentContainer = () => {
  const payment = useSelector((state) => state.payment);
  const total = payment.get('total');
  const discount = payment.get('discount');
  const dispatch = useDispatch();

  const [paymentInfo, setPaymentInfo] = useState({
    number: '',
    name: '',
    cvv: '',
    month: 0,
    year: 0,
  });

  useEffect(() => {
    dispatch(activatePromotion(discount));
  }, [dispatch]);

  const moneyFormat = formatter.format(total);

  const handlePayment = (e) => {
    e.preventDefault();

    const correctData = {
      ...paymentInfo,
      cvv: parseInt(paymentInfo.cvv, 10),
      year: parseInt(paymentInfo.year, 10),
      month: parseInt(paymentInfo.month, 10),
    };

    dispatch(setAppIsLoading(true));
    dispatch(executePayment(correctData));
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
