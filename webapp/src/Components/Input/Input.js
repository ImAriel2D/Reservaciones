import React from 'react';
import PropTypes from 'prop-types';

import './styles/input.scss';

const Input = ({
  placeHolder,
  value,
  handleSetValue,
  error,
  maxLength,
}) => (
  <div className="text-input-container">
    <input maxLength={maxLength} className="text-input" placeholder={placeHolder} value={value} onChange={handleSetValue} type="text" />
    { error
    && (
    <p className="error-text">
      {placeHolder}
      {' '}
      no puede estar vacío / Dato que proporcionado no es valido.
    </p>
    )}
  </div>
);

Input.propTypes = {
  error: PropTypes.bool.isRequired,
  handleSetValue: PropTypes.func.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
