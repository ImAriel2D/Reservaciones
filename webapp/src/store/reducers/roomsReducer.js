import { Map } from 'immutable';

import { ROOMS_SET_ROOMS } from '../constants';

const initialState = Map({
  simple: 0,
  double: 0,
  master: 0,
  suite: 0,
});

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROOMS_SET_ROOMS:
      return state
        .set('simple', payload.simple)
        .set('double', payload.double)
        .set('master', payload.master)
        .set('suite', payload.suite);

    default:
      return state;
  }
};

export default roomsReducer;
