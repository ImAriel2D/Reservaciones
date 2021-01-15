import { Map } from 'immutable';
import moment from 'moment';

import {
  DATES_SET_ENTRY_DATE,
  DATES_SET_LEAVING_DATE,
  DATES_SET_NUMBER_OF_NIGHTS,
} from '../constants';

const initialState = Map({
  entryDate: moment(),
  leavingDate: moment(),
  numberOfNights: 0,
});

const datesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case DATES_SET_ENTRY_DATE:
      return state.set('entryDate', payload);

    case DATES_SET_LEAVING_DATE:
      return state.set('leavingDate', payload);

    case DATES_SET_NUMBER_OF_NIGHTS:
      return state.set('numberOfNights', payload);

    default:
      return state;
  }
};

export default datesReducer;
