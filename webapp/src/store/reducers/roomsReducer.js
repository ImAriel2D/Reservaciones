import { Map } from 'immutable';

import {
  ROOMS_SET_ROOMS,
  ROOMS_SET_AVAILABLE_ROOMS,
} from '../constants';

const initialState = Map({
  simple: 0,
  double: 0,
  master: 0,
  suite: 0,
  available: Map({
    simple: 0,
    double: 0,
    master: 0,
    suite: 0,
  }),
});

const roomsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ROOMS_SET_ROOMS:
      return state
        .set('simple', payload.simple)
        .set('double', payload.double)
        .set('master', payload.master)
        .set('suite', payload.suite);

    case ROOMS_SET_AVAILABLE_ROOMS:
      return state
        .setIn(['available', 'simple'], payload.numSencilla)
        .setIn(['available', 'double'], payload.numDobles)
        .setIn(['available', 'master'], payload.numMatrimoniales)
        .setIn(['available', 'suite'], payload.numSuit);

    default:
      return state;
  }
};

export default roomsReducer;
