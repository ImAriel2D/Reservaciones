import axios from 'axios';
import config from 'config';

const { apiGatewayUrl } = config;

export const createReservationService = (url, body, resolve, reject) => {
  axios.post(`${apiGatewayUrl}${url}`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(() => reject(new Error('We could not connect with the server!')));
};

export const consultOccupiedRooms = (url, body, resolve, reject) => {
  axios.get(`${apiGatewayUrl}${url}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    params: body,
  })
    .then(resolve)
    .catch(() => reject(new Error('We could not connect with Hotel!')));
};
