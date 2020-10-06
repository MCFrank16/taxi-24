const internalError = require('../helper/server-error');
const db = require('../config/db');

const { readQueries: { checkData } } = require('../models/queries/index');

/**
 * this middleware check if data is not in database or return 400 with empty body
 * @param {table} table table to use
 * @param {string} field name of the field to check in
 * @return {object}
 */

const shouldNotExist = (table, field) => async (req, res, next) => {
  try {
    const exist = await db.database.all(checkData(table, field, req.value[field]));
    if (exist.length > 0) {
      return res.status(400).send({ status: 'failed', message: 'User already exist' });
    }
    return next();
  } catch (err) {
    return internalError(err, res);
  }
};

/**
 * this middleware check if data is not in database or return 400 with empty body
 * @param {table} table table to use
 * @param {string} field name of the field to check in
 * @return {object}
 */

const shouldTrackExist = (table, field) => async (req, res, next) => {
  try {
    const { driverID } = req.params;
    const exist = await db.database.all(checkData(table, field, driverID));
    if (exist.length > 0) {
      req.data = exist;
      return next();
    }
    return res.status(404).json({ status: 'failed', message: 'Data not found' });
  } catch (err) {
    return internalError(err, res);
  }
};

module.exports = {
  shouldNotExist,
  shouldTrackExist
};
