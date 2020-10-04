require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const log = require('./source/helper/logger');
const router = require('./source/routes');

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.status(200).json({ status: 'success', message: 'Fleet Management System' });
});

app.listen(port, () => {
  log.info(`🚀 Application running on: http://localhost:${port}`);
});

module.exports = app;
