import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNumberOfForms } from 'store/actions/formActions';

import UserFormComponent from 'Components/UserForm';
import DatesFormContainer from 'Components/DatesForm';
import RoomsFormContainer from 'Components/RoomsForm';
import CheckoutContainer from 'Components/Checkout';
import PaymentContainer from 'Components/Payment';

import Loading from 'Components/Loading';

const ReservationMaker = () => {
  const isLoading = useSelector((state) => state.app.get('isLoading'));
  const index = useSelector((state) => state.form.get('index'));
  const dispatch = useDispatch();

  const forms = [
    UserFormComponent,
    DatesFormContainer,
    RoomsFormContainer,
    CheckoutContainer,
    PaymentContainer,
  ];
  const CurrentForm = forms[index];

  useEffect(() => {
    dispatch(setNumberOfForms(forms.length));
  }, []);

  return (
    <Fragment>
      <Loading isLoading={isLoading} />
      <CurrentForm />
    </Fragment>
  );
};

export default ReservationMaker;
