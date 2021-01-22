require('./src/db/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();

const reservationRouter = require('./src/routes/reservation');
const roomsRouter = require('./src/routes/rooms');
const payment = require('./src/routes/payment');

app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api', reservationRouter);
app.use('/api', roomsRouter);
app.use('/api', payment);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('webapp/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'webapp', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port);
