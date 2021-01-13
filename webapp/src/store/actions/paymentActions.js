import swal from 'sweetalert';

import createReservation from '../../lib/apiCreateReservation';
import { setAppIsLoading } from './appActions';

export const executePayment = () => (dispatch, getState) => {
  const storedUser = getState().user;

  const data = {
    user: {
      name: storedUser.get('name'),
      paternalSurname: storedUser.get('paternalSurname'),
      maternalSurname: storedUser.get('maternalSurname'),
      dateOfBirth: storedUser.get('dateOfBirth'),
      email: storedUser.get('email'),
      phone: storedUser.get('phone'),
    },
    reservation: {
      entryDate: '2020-02-01T18:25:43.511Z',
      leavingDate: '2020-02-01T18:25:43.511Z',
      rooms: {
        simple: 0,
        double: 0,
        master: 0,
        suite: 0,
      },
      total: 2500.00,
      serviceTotal: 0,
      totalPending: 0,
      paid: true,
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
