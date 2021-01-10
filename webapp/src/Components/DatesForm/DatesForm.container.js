import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import { increaseIndex } from '../../store/actions/formActions';

import DatesFormComponent from './DatesForm.component';

const DatesFormContainer = () => {
  const [dates, setDates] = useState({
    entryDate: moment().format(),
    leavingDate: moment().format(),
  });

  const dispatch = useDispatch();

  const handleSubmitDates = (e) => {
    e.preventDefault();
    dispatch(increaseIndex());
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
