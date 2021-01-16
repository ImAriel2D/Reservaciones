const express = require('express');
const fetch = require('node-fetch');

const config = require('../config');

const { hotelApiGatewayUrl } = config;
const {
  ROOMS_CONSULT_ROUTE,
  ROOMS_SAVE_ROUTE,
} = require('../routes');

const router = express.Router();

router.get('/rooms/occupied', (req, res) => {
  const { body } = req;

  fetch(`${hotelApiGatewayUrl}${ROOMS_CONSULT_ROUTE}`, {
    method: 'POST',
    body,
  })
    .then((res) => res.json())
    .then((rooms) => {
      res.status(200).send(rooms);
    })
    .catch(() => {
      res.status(404).json({ message: 'We could not get the rooms.' });
    });
});

router.post('/rooms/save', (req, res) => {
  const { body } = req;

  fetch(`${hotelApiGatewayUrl}${ROOMS_SAVE_ROUTE}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((result) => {
      res.status(200).send({ message: result });
    })
    .catch((e) => {
      console.log(e);
      res.status(404).json({ message: 'We could not save the rooms.' });
    });
});

module.exports = router;
