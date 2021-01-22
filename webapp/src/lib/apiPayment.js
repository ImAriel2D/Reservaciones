import Promise from 'bluebird';

import {
  RESERVATION_API_ROUTE,
  PAYMENT_API_ROUTE,
} from 'routes';

import { post } from './apiService';

export const paymentService = (body) => new Promise((resolve, reject) => {
  post(PAYMENT_API_ROUTE, body, resolve, reject);
});

export const createReservation = (body) => new Promise((resolve, reject) => {
  post(RESERVATION_API_ROUTE, body, resolve, reject);
});
