import React, { useState } from 'react';

import UserFormComponent from '../UserForm';
import DatesFormContainer from '../DatesForm';
import RoomsFormContainer from '../RoomsForm';

const ReservationMaker = () => {
  const [index, setIndex] = useState(0);

  const forms = [UserFormComponent, DatesFormContainer, RoomsFormContainer];
  const CurrentForm = forms[index];

  const showNextForm = () => {
    const areMoreFormsToShow = index < forms.length - 1;

    if (areMoreFormsToShow) {
      setIndex(index + 1);
    } else {
      // TODO: make and show payment form.
    }
  };

  return (
    <CurrentForm
      showNextForm={showNextForm}
    />
  );
};

export default ReservationMaker;
