const internalError = require('../helper/server-error');
const db = require('../config/db');

const { readQueries: { readTrip } } = require('../models/queries/index');


/**
 * this middleware retrieves all the driver current position in the database
 * @param {object} req the request object
 * @param {object} res the response object
 * @return {Array} return an array of object containing position
 */

const invoice = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { price } = req.value;
    const data = await db.database.all(readTrip(id));

    if (data.length === 0) {
      return res.status(404).json({ status: 'failed', message: 'Trip not found' });
    }
    const { distance } = data[0];
    const total = price * distance;
    req.amount = {
      id,
      total
    };
    return next();
  } catch (err) {
    return internalError(err);
  }
};

module.exports = invoice;
