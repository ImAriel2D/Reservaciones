import Promise from 'bluebird';

import { ROOMS_API_CONSULT_ROOMS } from 'routes';

import { post } from './apiService';

export const consultRooms = (body) => new Promise((resolve, reject) => {
  post(ROOMS_API_CONSULT_ROOMS, body, resolve, reject);
});
