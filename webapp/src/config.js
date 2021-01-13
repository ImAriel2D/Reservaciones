const dev = {
  apiGatewayUrl: 'http://localhost:4000',
};

const prod = {
  apiGatewayUrl: 'https://www.reservaciones.app',
};

let config = dev;

config = process.env.REACT_APP_ENV === 'prod' ? prod : config;

export default {
  ...config,
};
