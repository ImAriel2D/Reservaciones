const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
  entryDate: {
    type: Date,
    required: true,
  },
  leavingDate: {
    type: Date,
    required: true,
  },
  rooms: {
    type: {
      simple: {
        type: Number,
        required: true,
      },
      double: {
        type: Number,
        required: true,
      },
      master: {
        type: Number,
        required: true,
      },
      suite: {
        type: Number,
        required: true,
      },
    },
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  serviceTotal: {
    type: Number,
    default: 0,
  },
  totalPending: {
    type: Number,
    required: true,
  },
  paid: {
    type: Boolean,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
