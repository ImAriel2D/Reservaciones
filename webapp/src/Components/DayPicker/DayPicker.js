import React from 'react';
import PropTypes from 'prop-types';

import './styles/daypicker.scss';

const DayPicker = ({
  handleSetDate,
  placeHolder,
  value,
}) => (
  <div className="day-picker-container">
    <p className="day-picker-title">{ placeHolder }</p>
    <input
      className="day-picker-input"
      onChange={handleSetDate}
      type="date"
      value={value}
    />
  </div>
);

DayPicker.propTypes = {
  handleSetDate: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default DayPicker;
