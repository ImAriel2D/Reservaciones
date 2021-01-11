import axios from 'axios';
import config from '../config';

const { apiGatewayUrl } = config;

export default (url, body, resolve, reject) => {
  axios.post(`${apiGatewayUrl}${url}`, body, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(() => reject(new Error('No se puede conectar con el servidor.')));
};
