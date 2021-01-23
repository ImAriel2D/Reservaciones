import swal from 'sweetalert';

import {
  PAYMENT_SET_TOTAL,
  PAYMENT_SET_PAID,
  PAYMENT_SET_PROMOTION_ACTIVE,
  PAYMENT_SET_DISCOUNT,
} from 'store/constants';

import { apiGetPromotion } from 'lib/apiPromotion';

import { paymentService, createReservation } from 'lib/apiPayment';
import { setAppIsLoading } from './appActions';

export const setTotal = (payload) => ({ type: PAYMENT_SET_TOTAL, payload });
export const setPaid = (payload) => ({ type: PAYMENT_SET_PAID, payload });
export const setIsPromotionActive = (payload) => ({ type: PAYMENT_SET_PROMOTION_ACTIVE, payload });
export const setDiscount = (payload) => ({ type: PAYMENT_SET_DISCOUNT, payload });

export const activatePromotion = (discountRate) => (dispatch, getState) => {
  const total = getState().payment.get('total');

  const discount = (total * discountRate) / 100;
  const discountedPrice = total - discount;

  const finalTotal = discountRate > 0 && discountRate <= 100 ? discountedPrice : total;

  dispatch(setTotal(finalTotal));
};

export const executeOccupiedRooms = () => (dispatch, getState) => {
  const {
    dates,
    user,
    payment,
    rooms,
  } = getState();

  const data = {
    user: {
      name: user.get('name'),
      paternalSurname: user.get('paternalSurname'),
      maternalSurname: user.get('maternalSurname'),
      dateOfBirth: user.get('dateOfBirth'),
      email: user.get('email'),
      phone: user.get('phone'),
    },
    reservation: {
      entryDate: dates.get('entryDate'),
      leavingDate: dates.get('leavingDate'),
      rooms: {
        simple: rooms.get('simple'),
        double: rooms.get('double'),
        master: rooms.get('master'),
        suite: rooms.get('suite'),
      },
      total: payment.get('total'),
      serviceTotal: payment.get('serviceTotal'),
      totalPending: payment.get('totalPending'),
      paid: true,
    },
  };

  createReservation(data)
    .then(() => {
      swal({
        icon: 'success',
        text: 'El pago fue exitoso.',
      });
    })
    .catch(() => {
      swal({
        icon: 'error',
        text: 'Hubo un problema al crear la reservación.',
      });
    }).finally(() => dispatch(setAppIsLoading(false)));
};

export const executePayment = (payment) => (dispatch, getState) => {
  const body = {
    ...payment,
    amount: getState().payment.get('total'),
  };

  paymentService(body)
    .then(() => {
      dispatch(executeOccupiedRooms());
    })
    .catch(() => {
      swal({
        icon: 'error',
        text: 'Ha ocurrido un error con el pago, inténtelo mas tarde!',
      });
    })
    .finally(() => dispatch(setAppIsLoading(false)));
};

export const findPromotion = (promotion) => (dispatch) => {
  apiGetPromotion({}, promotion)
    .then(({ data }) => {
      const discount = data.descuento;
      dispatch(setDiscount(discount));
      dispatch(setIsPromotionActive(true));
    })
    .catch((e) => {
      console.log(e);
    });
};
