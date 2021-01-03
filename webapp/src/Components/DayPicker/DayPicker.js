import React from 'react';
import PropTypes from 'prop-types';

const DayPicker = ({ handleSetDate }) => (
  <input
    type="date"
    onChange={handleSetDate}
  />
);

DayPicker.propTypes = {
  handleSetDate: PropTypes.func.isRequired,
};

export default DayPicker;
