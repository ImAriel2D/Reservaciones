import React from 'react';
import PropTypes from 'prop-types';

import DayPicker from '../DayPicker';
import SubmitForm from '../SubmitForm/SubmitForm';

const DatesFormComponent = ({
  handleSubmitDate,
  handleEntryDate,
  handleLeavingDate,
}) => (
  <SubmitForm handleSubmit={handleSubmitDate} title="Eligiendo fechas">
    <DayPicker
      handleSetDate={handleEntryDate}
      placeHolder="Fecha de llegada"
    />
    <DayPicker
      handleSetDate={handleLeavingDate}
      placeHolder="Fecha de salida"
    />
  </SubmitForm>
);

DatesFormComponent.propTypes = {
  handleSubmitDate: PropTypes.func.isRequired,
  handleEntryDate: PropTypes.func.isRequired,
  handleLeavingDate: PropTypes.func.isRequired,
};

export default DatesFormComponent;
