import React from 'react';
import PropTypes from 'prop-types';

import SubmitButton from '../SubmitButton';

import './styles/submitForm.scss';

const SubmitForm = ({ children, handleSubmit, title }) => (
  <form className="submit-form" onSubmit={handleSubmit}>
    <h1 id="title">{ title }</h1>
    { children }
    <SubmitButton placeHolder="Siguiente" />
  </form>
);

SubmitForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SubmitForm;
