import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  checkForEmptyUserProperties,
  validateEmail,
  objectHasFalseAttributes,
} from '../../utils/validateUser';

import { increaseIndex } from '../../store/actions/formActions';
import setStoredUser from '../../store/actions/userActions';

import UserFormComponent from './UserForm.component';

const UserFormContainer = () => {
  const storedUser = useSelector((state) => state.user);

  const [user, setUser] = useState({
    name: storedUser.get('name'),
    paternalSurname: storedUser.get('paternalSurname'),
    maternalSurname: storedUser.get('maternalSurname'),
    dateOfBirth: storedUser.get('dateOfBirth'),
    email: storedUser.get('email'),
    phone: storedUser.get('phone'),
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
      dispatch(setStoredUser(user));
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
