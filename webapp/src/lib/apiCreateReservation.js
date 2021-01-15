import Promise from 'bluebird';

import { RESERVATION_API_ROUTE } from 'routes';
import post from './apiService';

const createReservation = (body) => new Promise((resolve, reject) => {
  post(RESERVATION_API_ROUTE, body, resolve, reject);
});

export default createReservation;
