const dev = {
  apiGatewayUrl: 'http://localhost:4000',
};

const prod = {
  apiGatewayUrl: 'https://reservaciones-equipo2.herokuapp.com',
};

let config = dev;

config = process.env.REACT_APP_ENV === 'prod' ? prod : config;

export default {
  ...config,
};
