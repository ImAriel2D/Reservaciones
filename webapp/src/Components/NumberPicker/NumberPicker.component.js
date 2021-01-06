import React from 'react';
import PropTypes from 'prop-types';

import './styles/numberPicker.scss';

const NumberPicker = ({
  placeHolder,
  value,
  handleSetValue,
  min,
  max,
}) => (
  <div className="number-picker-container">
    <span className="title-place-holder">{ placeHolder }</span>
    <input
      type="number"
      value={value}
      onChange={handleSetValue}
      min={min}
      max={max}
    />
  </div>
);

NumberPicker.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleSetValue: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default NumberPicker;
