import React from 'react';
import PropTypes from 'prop-types';

import './styles/input.scss';

const Input = ({
  placeHolder,
  value,
  handleSetValue,
  error,
}) => (
  <div className="text-input-container">
    <input className="text-input" placeholder={placeHolder} value={value} onChange={handleSetValue} type="text" />
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
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleSetValue: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
};

export default Input;
