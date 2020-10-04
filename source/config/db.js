const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { unlinkSync } = require('fs');

const log = require('../helper/logger');
const env = require('./environment');

const {
  createTableQueries: {
    createTableUser, createTableTrip, createTableInvoice, createTableTrackDriver
  },
  seedQueries: { dataSeed }
} = require('../models/queries/index');


const db = {};

unlinkSync(env.path);

(async () => {
  try {
    const d = await open({
      filename: env.path,
      driver: sqlite3.Database
    });
    await d.exec(createTableUser);
    await d.exec(createTableTrip);
    await d.exec(createTableInvoice);
    await d.exec(createTableTrackDriver);
    await d.exec(dataSeed);
    db.database = d;
  } catch (err) {
    log.debug(err);
  }
})();

module.exports = db;
