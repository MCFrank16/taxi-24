const log = require('../helper/logger');
const db = require('../config/db');

const { readQueries } = require('../models/queries/index');

const { checkData } = readQueries;

module.exports = (table) => async (req, res, next) => {
  try {
    const { email, phonenumber } = req.value;
    const exist = await db.database.all(checkData(table, email, phonenumber));
    if (exist.length > 0) {
      return res.status(400).send({ status: 'failed', message: 'User already exist' });
    }
    return next();
  } catch (error) {
    log.error(error);
    return res.status(500).send({ status: 'failed', message: 'Internal server error' });
  }
};
