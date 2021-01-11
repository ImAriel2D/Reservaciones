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

if (process.env.NODE_ENV === 'production'){
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/app/index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port);
