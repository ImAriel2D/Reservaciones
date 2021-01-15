import {
  DATES_SET_ENTRY_DATE,
  DATES_SET_LEAVING_DATE,
  DATES_SET_NUMBER_OF_NIGHTS,
} from '../constants';

export const setEntryDate = (payload) => ({ type: DATES_SET_ENTRY_DATE, payload });
export const setLeavingDate = (payload) => ({ type: DATES_SET_LEAVING_DATE, payload });
export const setNumberOfNights = (payload) => ({ type: DATES_SET_NUMBER_OF_NIGHTS, payload });
