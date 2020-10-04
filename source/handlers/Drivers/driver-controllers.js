const { v4 } = require('uuid');
const db = require('../../config/db');
const internalError = require('../../helper/server-error');

const {
  insertQueries: { insertDriver },
  readQueries: { readAllData, readData }
} = require('../../models/queries/index');


module.exports = class DriverController {
  static async createDriver(req, res) {
    try {
      const {
        firstname, lastname, email, phonenumber, gender
      } = req.value;
      const id = v4().toString();
      await db.database.exec(insertDriver(id,
                                          firstname,
                                          lastname,
                                          email,
                                          phonenumber,
                                          gender,
                                          new Date().toLocaleDateString(),
                                          new Date().toLocaleDateString()));
      return res.status(201).json({ status: 'success', message: 'Driver Created.' });
    } catch (err) {
      return internalError(err, res);
    }
  }

  static async getAllDrivers(req, res) {
    try {
      const drivers = await db.database.all(readAllData('Drivers'));
      return res.status(200).json({ status: 'success', drivers });
    } catch (err) {
      return internalError(err, res);
    }
  }

  static async getDriver(req, res) {
    try {
      const { id } = (req.params || {});
      const driver = await db.database.all(readData('Drivers', id));
      return res.status(200).json({ status: 'success', driver });
    } catch (err) {
      return internalError(err, res);
    }
  }
};
