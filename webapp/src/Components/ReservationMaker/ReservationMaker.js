import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setNumberOfForms } from '../../store/actions/formActions';

import UserFormComponent from '../UserForm';
import DatesFormContainer from '../DatesForm';
import RoomsFormContainer from '../RoomsForm';

const ReservationMaker = () => {
  const index = useSelector((state) => state.form.get('index'));
  const dispatch = useDispatch();

  const forms = [UserFormComponent, DatesFormContainer, RoomsFormContainer];
  const CurrentForm = forms[index];

  useEffect(() => {
    dispatch(setNumberOfForms(forms.length));
  }, []);

  return (
    <CurrentForm />
  );
};

export default ReservationMaker;
