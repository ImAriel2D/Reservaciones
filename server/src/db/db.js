const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
