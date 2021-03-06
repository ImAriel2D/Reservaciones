import { Map } from 'immutable';

import {
  PAYMENT_SET_TOTAL,
  PAYMENT_SET_PAID,
  PAYMENT_SET_INFO,
  PAYMENT_SET_PROMOTION_ACTIVE,
  PAYMENT_SET_DISCOUNT,
} from 'store/constants';

const initialState = Map({
  total: 0,
  serviceTotal: 0,
  totalPending: 0,
  paid: false,
  information: {
    nombre: '',
    numero: 0,
    cvv: 0,
    month: 0,
    year: 0,
  },
  isTherePromotionActive: false,
  discount: 0,
});

const paymentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAYMENT_SET_TOTAL:
      return state.set('total', payload);

    case PAYMENT_SET_PAID:
      return state.set('paid', false);

    case PAYMENT_SET_INFO:
      return state.setIn('information', payload);

    case PAYMENT_SET_PROMOTION_ACTIVE:
      return state.set('isTherePromotionActive', payload);

    case PAYMENT_SET_DISCOUNT:
      return state.set('discount', payload);

    default:
      return state;
  }
};

export default paymentReducer;
