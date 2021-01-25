const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const { bankGatewayUrl } = require('../config');
const { HOTEL_EXECUTE_PAYMENT } = require('../routes');

router.post('/payment', (req, res) => {
  const { body } = req;

  const finalData = {
    AccountCompanyId: 18, // HARD-CODING 18 BECAUSE ITS THE RESERVATION ACCOUNT ID
    Amount: body.amount,
    CardNumber: body.number,
    Cvv: body.cvv,
    Description: 'Pago reservación',
    Month: body.month,
    Year: body.year,
    Name: body.name,
  };

  fetch(`${bankGatewayUrl}${HOTEL_EXECUTE_PAYMENT}`, {
    method: 'POST',
    body: JSON.stringify(finalData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.error || result.status === 400) {
        throw result.error;
      } else {
        res.status(201).send(result);
      }
    })
    .catch((e) => {
      res.status(401).send({
        message: 'We could not execute the payment at this moment.',
        error: e,
      });
    });
});

module.exports = router;
