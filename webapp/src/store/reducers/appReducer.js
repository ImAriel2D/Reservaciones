import { Map } from 'immutable';

import { APP_IS_LOADING } from '../constants';

const initialState = Map({
  isLoading: false,
});

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case APP_IS_LOADING:
      return state.set('isLoading', payload);

    default:
      return state;
  }
};

export default appReducer;
