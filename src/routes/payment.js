const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const { bankGatewayUrl } = require('../config');
const { HOTEL_EXECUTE_PAYMENT } = require('../routes');

router.post('/payment', (req, res) => {
  const { body } = req;

  const finalData = {
    AccountCompanyId: 5, // TODO: GET ACTUAL COMPANY ID
    Amount: body.amount,
    CardNumber: body.number,
    Cvv: body.cvv,
    Description: 'Pago reservación',
    Month: 5,
    Year: body.year,
    Name: body.name,
  };

  fetch(`${bankGatewayUrl}${HOTEL_EXECUTE_PAYMENT}`, {
    method: 'POST',
    body: finalData,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((result) => {
      res.status(201).send({ result });
    })
    .catch((e) => {
      console.log(e);
      res.status(401).send({
        message: 'We could not execute the payment at this moment.',
        error: e,
      });
    });
});

module.exports = router;
