const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reservations', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
