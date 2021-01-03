import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Input from '../Input';
import DayPicker from '../DayPicker';
import SubmitButton from '../SubmitButton';

import './styles/userForm.scss';

const UserFormComponent = ({ handleSubmitForm, user, setUser }) => (
  <form id="user-form" onSubmit={handleSubmitForm}>
    <h1>Información de contacto</h1>
    <Input
      placeHolder="Nombre"
      handleSetValue={(e) => setUser({ ...user, name: e.target.value })}
      value={user.name}
    />
    <Input
      placeHolder="Apellido Paterno"
      handleSetValue={(e) => setUser({ ...user, paternalSurname: e.target.value })}
      value={user.paternalSurname}
    />
    <Input
      placeHolder="Apellido Materno"
      handleSetValue={(e) => setUser({ ...user, maternalSurname: e.target.value })}
      value={user.maternalSurname}
    />
    <DayPicker
      handleSetDate={(e) => setUser({ ...user, dateOfBirth: moment(e.target.value) })}
    />
    <Input
      placeHolder="Correo Electrónico"
      handleSetValue={(e) => setUser({ ...user, email: e.target.value })}
      value={user.email}
    />
    <Input
      placeHolder="Teléfono Celular"
      handleSetValue={(e) => setUser({ ...user, phone: e.target.value })}
      value={user.phone}
    />
    <SubmitButton placeHolder="Siguiente" />
  </form>
);

UserFormComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    paternalSurname: PropTypes.string,
    maternalSurname: PropTypes.string,
    dateOfBirth: PropTypes.instanceOf(moment),
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default UserFormComponent;
