import Promise from 'bluebird';

import {
  ROOMS_API_CONSULT_ROOMS,
} from 'routes';

import { consultOccupiedRooms } from './apiService';

export const consultRooms = (body) => new Promise((resolve, reject) => {
  consultOccupiedRooms(ROOMS_API_CONSULT_ROOMS, body, resolve, reject);
});

export default consultRooms;
