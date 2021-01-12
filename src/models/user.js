const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  paternalSurname: {
    type: String,
    required: true,
  },
  maternalSurname: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  phone: {
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
});

const User = mongoose.model('User', userSchema);

module.exports = User;
