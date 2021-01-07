import React from 'react';
import PropTypes from 'prop-types';

import './styles/daypicker.scss';

const DayPicker = ({ handleSetDate, placeHolder }) => (
  <div className="day-picker-container">
    <p className="day-picker-title">{ placeHolder }</p>
    <input
      type="date"
      onChange={handleSetDate}
      className="day-picker-input"
    />
  </div>
);

DayPicker.propTypes = {
  handleSetDate: PropTypes.func.isRequired,
  placeHolder: PropTypes.string.isRequired,
};

export default DayPicker;
