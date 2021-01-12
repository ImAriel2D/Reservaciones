require('./db/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const reservationRouter = require('./routes/reservation');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.json());

app.use('/api', reservationRouter);

if (process.env.NODE_ENV === 'production') {
  app.get('/*', (req, res) => {
    app.use(express.static('webapp/build'))
    res.sendFile(path.join(__dirname, '..', 'webapp', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port);
