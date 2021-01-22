const dev = {
  hotelApiGatewayUrl: 'https://hotel-casino-backend.herokuapp.com',
  bankGatewayUrl: 'http://bankith.gear.host',
  apiGatewayUrl: 'http://localhost:4000',
};

const prod = {
  hotelApiGatewayUrl: 'https://hotel-casino-backend.herokuapp.com',
  bankGatewayUrl: 'http://bankith.gear.host',
  apiGatewayUrl: 'https://www.reservaciones.app',
};

let config = dev;

config = process.env.NODE_ENV === 'production' ? prod : config;

module.exports = {
  ...config,
};
