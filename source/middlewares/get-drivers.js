const internalError = require('../helper/server-error');
const db = require('../config/db');

const { readQueries } = require('../models/queries/index');

const { readAllAvailable } = readQueries;

/**
 * this middleware retrieves all the driver current position in the database
 * @param {object} req the request object
 * @param {object} res the response object
 * @return {Array} return an array of object containing position
 */

const getAvailableDrivers = async (req, res, next) => {
  try {
    const data = await db.database.all(readAllAvailable('Track', 'isAvailable', 'yes'));
    req.drivers = data;
    return next();
  } catch (err) {
    return internalError(err, res);
  }
};

module.exports = getAvailableDrivers;
