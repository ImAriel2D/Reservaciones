import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNumberOfForms } from '../../store/actions/formActions';

import UserFormComponent from '../UserForm';
import DatesFormContainer from '../DatesForm';
import RoomsFormContainer from '../RoomsForm';
import CheckoutContainer from '../Checkout';
import PaymentContainer from '../Payment';

import Loading from '../Loading';

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
