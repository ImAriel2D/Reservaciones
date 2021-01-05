import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import DatesFormComponent from './DatesForm.component';

const DatesFormContainer = ({ showNextForm }) => {
  const [dates, setDates] = useState({
    entryDate: moment().format(),
    leavingDate: moment().format(),
  });

  const handleSubmitDates = (e) => {
    e.preventDefault();
    showNextForm();
  };

  return (
    <DatesFormComponent
      dates={dates}
      setDates={setDates}
      handleSubmitDates={handleSubmitDates}
    />
  );
};

DatesFormContainer.propTypes = {
  showNextForm: PropTypes.func.isRequired,
};

export default DatesFormContainer;
