import {
  FORM_SET_INDEX_AT,
  FORM_SET_NUMBER_OF_FORMS,
} from '../constants';

import createReservation from '../../lib/apiCreateReservation';

export const setIndexAt = (payload) => ({ type: FORM_SET_INDEX_AT, payload });
export const setNumberOfForms = (payload) => ({ type: FORM_SET_NUMBER_OF_FORMS, payload });

export const increaseIndex = () => (dispatch, getState) => {
  const index = getState().form.get('index');
  const numberOfForms = getState().form.get('forms');

  const areThereMoreForms = index < numberOfForms - 1;

  if (areThereMoreForms) {
    dispatch(setIndexAt(index + 1));
  } else {
    createReservation()
      .then(() => {
        // TODO: HANDLE SUCCESS
      })
      .catch(() => {
        // TODO: HANDLE ERROR
      });
  }
};

export const decreaseIndex = () => (dispatch, getState) => {
  const index = getState().form.get('index');
  const canGoBack = index > 0;

  if (canGoBack) {
    dispatch(setIndexAt(index - 1));
  }
};
