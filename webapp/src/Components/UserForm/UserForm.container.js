import React, { useState } from 'react';
import moment from 'moment';

import UserFormComponent from './UserForm.component';

const UserFormContainer = () => {
  const [user, setUser] = useState({
    name: '',
    paternalSurname: '',
    maternalSurname: '',
    dateOfBirth: moment(),
    age: '',
    email: '',
    phone: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(user.dateOfBirth.format());
  };

  return (
    <UserFormComponent
      handleSubmitForm={handleSubmitForm}
      user={user}
      setUser={setUser}
    />
  );
};

export default UserFormContainer;
