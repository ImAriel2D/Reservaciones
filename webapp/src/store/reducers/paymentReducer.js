import { Map } from 'immutable';

import {
  PAYMENT_SET_TOTAL,
  PAYMENT_SET_PAID,
} from 'store/constants';

const initialState = Map({
  total: 0,
  serviceTotal: 0,
  totalPending: 0,
  paid: false,
});

const paymentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENT_SET_TOTAL:
      return state.set('total', payload);

    case PAYMENT_SET_PAID:
      return state.set('paid', false);

    default:
      return state;
  }
};

export default paymentReducer;
