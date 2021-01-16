const express = require('express');

const router = express.Router();

const Reservation = require('../models/reservation');
const User = require('../models/user');

router.post('/reservation', async (req, res) => {
  try {
    const { body } = req;

    const user = new User({ ...body.user });
    const reservation = new Reservation({ ...body.reservation, owner: user._id });

    await user.save();
    await reservation.save();

    const responseData = {
      name: user.name,
      phone: user.phone,
      email: user.email,
      entryDate: reservation.entryDate,
      leavingDate: reservation.leavingDate,
      total: reservation.total,
      rooms: reservation.rooms,
      reservation: reservation._id,
    };

    res.status(201).json(responseData);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

router.get('/reservation/:id', async (req, res) => {
  try {
    const reservationId = req.params.id;
    const reservation = await Reservation.findOne({ _id: reservationId });
    const user = await User.findById(reservation.owner);

    if (!reservation) {
      res.status(404).json({ error: 'Reservation was not found.' });
    } else {
      res.status(200).json({ reservation, user });
    }
  } catch (e) {
    res.status(400).json({ error: 'Reservation was not found.' });
  }
});

router.get('/test', (req, res) => {
  res.send('Testing!!!');
});

module.exports = router;
