const express = require('express');

const router = express.Router();

const Reservation = require('../models/reservation');

router.post('/reservation', async (req, res) => {
  try {
    const reservation = new Reservation({
      ...req.body,
    });
    await reservation.save();
    res.status(201).json(reservation);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get('/reservations', async (req, res) => {
  try {
    const reservations = await Reservation.find({});
    res.status(200).json(reservations);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get('/reservation/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    const reservation = await Reservation.findOne({ _id: reservationId });

    if (!reservation) {
      res.status(404).json({ error: 'Reservation was not found.' });
    } else {
      res.status(200).json(reservation);
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

module.exports = router;
