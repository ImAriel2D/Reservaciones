import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPicker from '../DayPicker';
import SubmitForm from '../SubmitForm/SubmitForm';

const DatesFormComponent = ({ dates, setDates, handleSubmitDates }) => (
  <SubmitForm handleSubmit={handleSubmitDates} title="Eligiendo fechas">
    <DayPicker
      handleSetDate={(e) => setDates({ ...dates, entryDate: moment(e.target.value).format() })}
      placeHolder="Fecha de llegada"
    />
    <DayPicker
      handleSetDate={(e) => setDates({ ...dates, leavingDate: moment(e.target.value).format() })}
      placeHolder="Fecha de salida"
    />
  </SubmitForm>
);

DatesFormComponent.propTypes = {
  dates: PropTypes.shape({
    entryDate: PropTypes.string.isRequired,
    leavingDate: PropTypes.string.isRequired,
  }).isRequired,
  setDates: PropTypes.func.isRequired,
  handleSubmitDates: PropTypes.func.isRequired,
};

export default DatesFormComponent;
