import React from 'react';
import PropTypes from 'prop-types';

import './styles/userForm.scss';

const UserFormComponent = ({ handleSubmitForm }) => (
  <form id="user-form" onSubmit={handleSubmitForm}>
    <h1>Información de contacto</h1>
    <input placeholder="Nombre" type="text" />
    <input placeholder="Apellido Paterno" type="text" />
    <input placeholder="Apellido Materno" type="text" />
    <input type="date" />
    <input placeholder="Correo Electrónico" type="Email" />
    <input placeholder="Teléfono Celular" type="Teléfono" />
    <button type="submit">Siguiente</button>
  </form>
);

UserFormComponent.propTypes = {
  handleSubmitForm: PropTypes.func.isRequired,
};

export default UserFormComponent;
