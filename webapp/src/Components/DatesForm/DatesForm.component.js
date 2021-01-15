import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DayPicker from 'Components/DayPicker';
import SubmitForm from 'Components/SubmitForm/SubmitForm';

const DatesFormComponent = ({
  dates,
  handleSubmitDate,
  handleEntryDate,
  handleLeavingDate,
}) => (
  <SubmitForm handleSubmit={handleSubmitDate} title="Eligiendo fechas">
    <DayPicker
      handleSetDate={handleEntryDate}
      placeHolder="Fecha de llegada"
      value={dates.entryDate.format('YYYY-MM-DD')}
    />
    <DayPicker
      handleSetDate={handleLeavingDate}
      placeHolder="Fecha de salida"
      value={dates.leavingDate.format('YYYY-MM-DD')}
    />
  </SubmitForm>
);

DatesFormComponent.propTypes = {
  dates: PropTypes.shape({
    entryDate: PropTypes.instanceOf(moment).isRequired,
    leavingDate: PropTypes.instanceOf(moment).isRequired,
  }).isRequired,
  handleSubmitDate: PropTypes.func.isRequired,
  handleEntryDate: PropTypes.func.isRequired,
  handleLeavingDate: PropTypes.func.isRequired,
};

export default DatesFormComponent;
