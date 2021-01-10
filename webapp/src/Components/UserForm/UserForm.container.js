import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import {
  checkForEmptyUserProperties,
  validateEmail,
  objectHasFalseAttributes,
} from '../../utils/validateUser';

import { increaseIndex } from '../../store/actions/formActions';

import UserFormComponent from './UserForm.component';

const UserFormContainer = () => {
  const [user, setUser] = useState({
    name: '',
    paternalSurname: '',
    maternalSurname: '',
    dateOfBirth: moment().format(),
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    paternalSurname: false,
    maternalSurname: false,
    dateOfBirth: false,
    email: false,
    phone: false,
  });

  const dispatch = useDispatch();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const { email } = user;

    const emptyPropertiesErrors = checkForEmptyUserProperties(user);
    const isEmailValid = validateEmail(email);

    const newErrors = { ...emptyPropertiesErrors, email: !isEmailValid };
    setErrors(newErrors);

    if (!objectHasFalseAttributes(newErrors)) {
      dispatch(increaseIndex());
    }
  };

  return (
    <UserFormComponent
      handleSubmitForm={handleSubmitForm}
      user={user}
      setUser={setUser}
      errors={errors}
    />
  );
};

export default UserFormContainer;
