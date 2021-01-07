import React from 'react';
import PropTypes from 'prop-types';

import './styles/numberPicker.scss';

const NumberPicker = ({
  handleDecrease,
  handleIncrease,
  placeHolder,
  value,
}) => (
  <div className="number-picker-container">
    <span className="title-place-holder">{ placeHolder }</span>
    <div className="number-container">
      <button className="number-button" onClick={handleDecrease} type="button">-</button>
      <p className="number-of-rooms">
        { value }
      </p>
      <button className="number-button" onClick={handleIncrease} type="button">+</button>
    </div>
  </div>
);

NumberPicker.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  handleIncrease: PropTypes.func.isRequired,
  handleDecrease: PropTypes.func.isRequired,
};

export default NumberPicker;
