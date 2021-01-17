import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';

import {
  checkForEmptyUserProperties,
  validateEmail,
  validatePhone,
  objectHasFalseAttributes,
} from 'utils/validateUser';

import { increaseIndex } from 'store/actions/formActions';
import setStoredUser from 'store/actions/userActions';

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
    const { email, phone, dateOfBirth } = user;
    const isAnAdult = moment().diff(dateOfBirth, 'YEAR') >= 18;

    if (isAnAdult) {
      const emptyPropertiesErrors = checkForEmptyUserProperties(user);
      const isEmailValid = validateEmail(email);
      const isPhoneValid = validatePhone(phone);

      const newErrors = { ...emptyPropertiesErrors, email: !isEmailValid, phone: !isPhoneValid };
      setErrors(newErrors);

      if (!objectHasFalseAttributes(newErrors)) {
        dispatch(increaseIndex());
        dispatch(setStoredUser(user));
      }
    } else {
      swal({
        text: 'Ocupas ser mayor de edad para reservar una habitación!',
        icon: 'error',
      });
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
