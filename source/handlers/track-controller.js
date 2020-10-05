/* eslint-disable no-nested-ternary */
const { v4 } = require('uuid');
const db = require('../config/db');
const internalError = require('../helper/server-error');
const calculate = require('../helper/convert');
const { parsor } = require('../helper/parsor');

const {
  updateQueries: { updateTrack }
} = require('../models/queries/index');


/**
 * this controller role is to keep updating the driver location (for tracking purpose)
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const trackDriver = async (req, res) => {
  try {
    const { location, status, onTrip } = req.value;
    const { driverID } = req.params;
    const id = v4().toString();
    await db.database.exec((updateTrack(id, driverID, JSON.stringify(location), status, onTrip, new Date().toLocaleDateString())));
    return res.status(200).json();
  } catch (error) {
    return internalError(error);
  }
};

/**
 * this controller retrieves all available drivers
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const allAvailableDrivers = async (req, res) => {
  const data = req.drivers;
  return res.status(200).json({ status: 'success', data });
};

/**
 * this controller retrieves all drivers within a specific location
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and an array of drivers.
 */

const getAllDriversWithin3KM = (req, res) => {
  const { lat, long } = req.query;
  if (!lat || !long === true) return res.status(400).json({ status: 'failed', message: 'provide both latitude and longitude' });

  const within = [];

  for (const el of req.drivers) {
    const distance = calculate(lat, long, parsor(el.location).lat, parsor(el.location).long);

    if (distance !== 0 && distance < 3) {
      const response = {
        DriverID: el.DriverID,
        location: { lat: parsor(el.location).lat, long: parsor(el.location).long },
        isAvailable: el.isAvailable,
        onTrip: el.onTrip,
        distance
      };

      within.push(response);
    }
  }
  return res.status(200).json({ status: 'success', data: within });
};

/**
 * this controller retrieves 3 closest drivers to a rider
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and an array of drivers.
 */

const getClosestDrivers = (req, res) => {
  const { lat, long } = req.query;
  if (!lat || !long === true) return res.status(400).json({ status: 'failed', message: 'provide both latitude and longitude' });

  const distances = [];

  for (const el of req.drivers) {
    const dis = calculate(lat, long, parsor(el.location).lat, parsor(el.location).long);
    if (el.isAvailable === 'yes') {
      const response = {
        DriverID: el.DriverID,
        location: { lat: parsor(el.location).lat, long: parsor(el.location).long },
        isAvailable: el.isAvailable,
        onTrip: el.onTrip,
        distance: dis
      };
      distances.push(response);
    }
  }
  distances.sort((a, b) => ((a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0)));
  const closest = distances.slice(0, 3);
  return res.status(200).json({ status: 'success', drivers: closest });
};


module.exports = {
  trackDriver,
  allAvailableDrivers,
  getAllDriversWithin3KM,
  getClosestDrivers
};
