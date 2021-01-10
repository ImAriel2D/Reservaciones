import { Map } from 'immutable';
import moment from 'moment';

import { USER_SET_USER } from '../constants';

const initialState = Map({
  name: '',
  paternalSurname: '',
  maternalSurname: '',
  dateOfBirth: moment().format(),
  email: '',
  phone: '',
});

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_SET_USER:
      return state
        .set('name', payload.name)
        .set('paternalSurname', payload.paternalSurname)
        .set('maternalSurname', payload.maternalSurname)
        .set('dateOfBirth', payload.dateOfBirth)
        .set('email', payload.email)
        .set('phone', payload.phone);

    default:
      return state;
  }
};

export default userReducer;
