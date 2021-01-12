const mongoose = require('mongoose');

mongoose.connect(process.env.PORT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
