require('./db/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const reservationRouter = require('./routes/reservation');

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(cors());
app.use(express.json());

app.use('/api', reservationRouter);

const port = process.env.PORT || 4000;
app.listen(port);
