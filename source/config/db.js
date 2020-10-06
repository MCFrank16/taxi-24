const sqlite3 = require('sqlite3').verbose();
const { open } = require('sqlite');
const { unlinkSync } = require('fs');

const log = require('../helper/logger');
const env = require('./environment');

const {
  createTableQueries: {
    createTableUser, createTableTrip, createTableInvoice, createTableTrackDriver
  },
  seedQueries: {
    dataSeed, seedTrack, seedTrip, seedInvoice
  }
} = require('../models/queries/index');


const db = {};

if (process.env.NODE_ENV === 'test') unlinkSync(env.path);

(async () => {
  try {
    db.database = await open({
      filename: env.path,
      driver: sqlite3.Database
    });
    await db.database.exec(createTableUser);
    await db.database.exec(createTableTrip);
    await db.database.exec(createTableInvoice);
    await db.database.exec(createTableTrackDriver);
    await db.database.exec(dataSeed);
    await db.database.exec(seedTrack);
    await db.database.exec(seedTrip);
    await db.database.exec(seedInvoice);
  } catch (err) {
    log.debug(err);
  }
})();

module.exports = db;
