const { v4 } = require('uuid');
const db = require('../config/db');
const internalError = require('../helper/server-error');

const {
  insertQueries: { insertData },
  readQueries: { readAllData, readData }
} = require('../models/queries/index');

/**
 * this controller create either a rider or a driver
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const createUser = (type) => async (req, res) => {
  try {
    const {
      firstname, lastname, email, phonenumber, gender
    } = req.value;
    const id = v4().toString();
    await db.database.exec(insertData(id,
                                      firstname,
                                      lastname,
                                      email,
                                      phonenumber,
                                      gender,
                                      type,
                                      new Date().toLocaleDateString(),
                                      new Date().toLocaleDateString()));
    return res.status(201).json({ status: 'success', message: 'Data Created.' });
  } catch (err) {
    return internalError(err, res);
  }
};

/**
 * this controller get all users. a user can be a rider or a driver
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const getAllUser = (type) => async (req, res) => {
  try {
    const result = await db.database.all(readAllData(type));
    return res.status(200).json({ status: 'success', result });
  } catch (err) {
    return internalError(err, res);
  }
};

/**
 * this controller get a single rider or driver.
 *
 * @param {object} req this is the request object
 * @param {object} res this is the response object
 *
 * @return {object} it will return an object containing the status and message.
 */

const getUser = (type) => async (req, res) => {
  try {
    const { id } = (req.params || {});
    const result = await db.database.all(readData(type, id));
    if (result.length > 0) {
      return res.status(200).json({ status: 'success', result });
    }
    return res.status(404).json({ status: 'failed', message: `${type} not found` });
  } catch (err) {
    return internalError(err, res);
  }
};

module.exports = {
  getAllUser,
  getUser,
  createUser
};
