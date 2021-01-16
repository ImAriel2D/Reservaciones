import Promise from 'bluebird';

import { RESERVATION_API_ROUTE } from 'routes';
import { createReservationService } from './apiService';

const createReservation = (body) => new Promise((resolve, reject) => {
  createReservationService(RESERVATION_API_ROUTE, body, resolve, reject);
});

export default createReservation;
