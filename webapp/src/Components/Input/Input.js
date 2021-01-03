import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ placeHolder, value, handleSetValue }) => (
  <span>
    <input placeholder={placeHolder} value={value} onChange={handleSetValue} type="text" />
  </span>
);

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleSetValue: PropTypes.func.isRequired,
};

export default Input;
