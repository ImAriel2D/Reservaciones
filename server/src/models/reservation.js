const mongoose = require('mongoose');
const validator = require('validator');

const reservationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate(data) {
      if (!validator.isEmail(data)) {
        throw new Error('Not a valid email!');
      }
    },
  },
  paid: {
    type: Boolean,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  totalRemaining: {
    type: Number,
    required: true,
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
