import swal from 'sweetalert';

import {
  PAYMENT_SET_TOTAL,
  PAYMENT_SET_PAID,
} from 'store/constants';

import createReservation from 'lib/apiCreateReservation';
import { setAppIsLoading } from './appActions';

export const setTotal = (payload) => ({ type: PAYMENT_SET_TOTAL, payload });
export const setPaid = (payload) => ({ type: PAYMENT_SET_PAID, payload });

export const executePayment = () => (dispatch, getState) => {
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
      paid: payment.get('paid'),
    },
  };

  createReservation(data)
    .then(() => {
      dispatch(setAppIsLoading(false));
      swal({
        icon: 'success',
        text: 'El pago fue exitoso.',
      });
    })
    .catch(() => {
      dispatch(setAppIsLoading(false));
      swal({
        icon: 'error',
        text: 'No se pudo procesar el pago.',
      });
    });
};
