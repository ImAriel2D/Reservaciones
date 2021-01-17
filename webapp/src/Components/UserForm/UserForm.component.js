import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Input from 'Components/Input';
import DayPicker from 'Components/DayPicker';
import SubmitForm from 'Components/SubmitForm';

import './styles/userForm.scss';

const UserFormComponent = ({
  handleSubmitForm,
  user,
  setUser,
  errors,
}) => (
  <SubmitForm handleSubmit={handleSubmitForm} title="Información de contacto">
    <Input
      placeHolder="Nombre"
      handleSetValue={(e) => setUser({ ...user, name: e.target.value })}
      value={user.name}
      error={errors.name}
      maxLength={100}
    />
    <Input
      placeHolder="Apellido Paterno"
      handleSetValue={(e) => setUser({ ...user, paternalSurname: e.target.value })}
      value={user.paternalSurname}
      error={errors.paternalSurname}
      maxLength={100}
    />
    <Input
      placeHolder="Apellido Materno"
      handleSetValue={(e) => setUser({ ...user, maternalSurname: e.target.value })}
      value={user.maternalSurname}
      error={errors.maternalSurname}
      maxLength={100}
    />
    <DayPicker
      handleSetDate={(e) => setUser({ ...user, dateOfBirth: moment(e.target.value) })}
      placeHolder="Fecha de nacimiento"
      value={user.dateOfBirth.format('YYYY-MM-DD')}
    />
    <Input
      placeHolder="Correo Electrónico"
      handleSetValue={(e) => setUser({ ...user, email: e.target.value })}
      value={user.email}
      error={errors.email}
      maxLength={100}
    />
    <Input
      placeHolder="Teléfono Celular"
      handleSetValue={(e) => setUser({ ...user, phone: e.target.value })}
      value={user.phone}
      error={errors.phone}
      maxLength={14}
    />
  </SubmitForm>
);

UserFormComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
  user: PropTypes.shape({
    name: PropTypes.string,
    paternalSurname: PropTypes.string,
    maternalSurname: PropTypes.string,
    dateOfBirth: PropTypes.instanceOf(moment).isRequired,
    email: PropTypes.string,
    phone: PropTypes.string,
  }).isRequired,
  errors: PropTypes.shape({
    name: PropTypes.bool,
    paternalSurname: PropTypes.bool,
    maternalSurname: PropTypes.bool,
    dateOfBirth: PropTypes.bool,
    email: PropTypes.bool,
    phone: PropTypes.bool,
  }).isRequired,
  setUser: PropTypes.func.isRequired,
};

export default UserFormComponent;
