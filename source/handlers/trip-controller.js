const { v4 } = require('uuid');
const db = require('../config/db');
const internalError = require('../helper/server-error');
const { stringify } = require('../helper/parsor');
const converter = require('../helper/convert');


const {
  insertQueries: { insertTrip, insertInvoice },
  updateQueries: { updateDriverStatus, completeTrip },
  readQueries: { readAllTrip }
} = require('../models/queries/index');


/**
 * this controller create a trip and assign a driver.
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const createTrip = async (req, res) => {
  try {
    const {
      from, to, riderID, driverID, status
    } = req.value;

    const id = v4().toString();
    const distance = converter(from.lat, from.long, to.lat, to.long);

    await db.database.exec(insertTrip(id,
                                      stringify(from),
                                      stringify(to),
                                      status,
                                      distance,
                                      riderID,
                                      driverID,
                                      new Date().toLocaleDateString(),
                                      new Date().toLocaleDateString()));

    await db.database.exec(updateDriverStatus('no', 'yes', driverID));

    return res.status(201).json({ status: 'success', message: 'Trip Created.' });
  } catch (err) {
    return internalError(err);
  }
};

/**
 * this controller is used by the driver to complete the trip.
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const ActiveTrips = async (req, res) => {
  try {
    const result = await db.database.all(readAllTrip('active'));
    return res.status(200).json({ status: 'success', result });
  } catch (err) {
    return internalError(err);
  }
};

const CompletedTrip = async (req, res) => {
  try {
    const result = await db.database.all(readAllTrip('completed'));
    return res.status(200).json({ status: 'success', result });
  } catch (err) {
    return internalError(err);
  }
};

const finishTrip = async (req, res) => {
  try {
    const { id, total } = req.amount;
    await db.database.exec(completeTrip(id, total));
    await db.database.exec(insertInvoice(v4().toString(), id, new Date().toLocaleDateString(), total));
    return res.status(200).json({ status: 'success', message: 'Trip completed' });
  } catch (err) {
    return internalError(err);
  }
};


module.exports = {
  createTrip,
  ActiveTrips,
  CompletedTrip,
  finishTrip
};
