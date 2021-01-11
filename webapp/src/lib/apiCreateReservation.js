import Promise from 'bluebird';

import post from './apiService';
import { RESERVATION_API_ROUTE } from '../routes';

const createReservation = (body) => new Promise((resolve, reject) => {
  post(RESERVATION_API_ROUTE, body, resolve, reject);
});

export default createReservation;
