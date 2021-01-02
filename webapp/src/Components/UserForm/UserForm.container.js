import React from 'react';

import UserFormComponent from './UserForm.component';

const UserFormContainer = () => {
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <UserFormComponent
      handleSubmitForm={handleSubmitForm}
    />
  );
};

export default UserFormContainer;
