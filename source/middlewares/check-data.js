const internalError = require('../helper/server-error');
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
  } catch (err) {
    return internalError(err, res);
  }
};
