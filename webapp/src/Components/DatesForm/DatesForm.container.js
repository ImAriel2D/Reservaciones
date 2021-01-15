import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import moment from 'moment';

import {
  setEntryDate,
  setLeavingDate,
  setNumberOfNights,
} from 'store/actions/datesActions';

import { increaseIndex } from 'store/actions/formActions';

import DatesFormComponent from './DatesForm.component';

const DatesFormContainer = () => {
  const storedDates = useSelector((state) => state.dates);

  const [dates, setDates] = useState({
    entryDate: storedDates.get('entryDate'),
    leavingDate: storedDates.get('leavingDate'),
  });

  const dispatch = useDispatch();

  const handleSubmitDates = (e) => {
    e.preventDefault();
    const numberOfNights = dates.leavingDate.diff(dates.entryDate, 'days');

    if (numberOfNights <= 0) {
      swal({
        icon: 'error',
        text: 'La fecha de salida no puede ser antes de la de llegada!',
      });
    } else {
      dispatch(setEntryDate(moment(dates.entryDate)));
      dispatch(setLeavingDate(moment(dates.leavingDate)));
      dispatch(setNumberOfNights(numberOfNights));
      dispatch(increaseIndex());
    }
  };

  const handleEntryDate = (e) => {
    setDates({ ...dates, entryDate: moment(e.target.value) });
  };

  const handleLeavingDate = (e) => {
    setDates({ ...dates, leavingDate: moment(e.target.value) });
  };

  return (
    <DatesFormComponent
      dates={dates}
      handleSubmitDate={handleSubmitDates}
      handleEntryDate={handleEntryDate}
      handleLeavingDate={handleLeavingDate}
    />
  );
};

export default DatesFormContainer;
