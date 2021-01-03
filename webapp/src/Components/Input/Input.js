import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  placeHolder,
  value,
  handleSetValue,
  error,
}) => (
  <span>
    <input placeholder={placeHolder} value={value} onChange={handleSetValue} type="text" />
    { error && `${placeHolder} no puede estar vacío / Dato que proporcionado no es valido.` }
  </span>
);

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleSetValue: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Input;
