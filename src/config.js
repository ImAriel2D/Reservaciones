const dev = {
  hotelApiGatewayUrl: 'https://hotel-casino-backend.herokuapp.com',
};

const prod = {
  hotelApiGatewayUrl: 'https://hotel-casino-backend.herokuapp.com',
};

let config = dev;

config = process.env.NODE_ENV === 'production' ? prod : config;

module.exports = {
  ...config,
};
