import React, { useState } from 'react';
import moment from 'moment';

import DatesFormComponent from './DatesForm.component';

const DatesFormContainer = () => {
  const [dates, setDates] = useState({
    entryDate: moment().format(),
    leavingDate: moment().format(),
  });

  const handleSubmitDates = (e) => {
    e.preventDefault();
    console.log(dates);
  };

  return (
    <DatesFormComponent
      dates={dates}
      setDates={setDates}
      handleSubmitDates={handleSubmitDates}
    />
  );
};

export default DatesFormContainer;
