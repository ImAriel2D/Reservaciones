import { Map } from 'immutable';

import {
  FORM_SET_INDEX_AT,
  FORM_SET_NUMBER_OF_FORMS,
} from '../constants';

const initialState = Map({
  index: 0,
  forms: 0,
});

const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FORM_SET_INDEX_AT:
      return state.set('index', payload);

    case FORM_SET_NUMBER_OF_FORMS:
      return state.set('forms', payload);

    default:
      return state;
  }
};

export default formReducer;
