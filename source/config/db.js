const sqlite3 = require('sqlite3').verbose();
const { resolve, join } = require('path');

const log = require('../helper/logger');
const { createTable } = require('../helper/queries/index');

const {
  createTableDriver, createTableRider, createTableTrip, createTableInvoice
} = createTable;

const path = join(resolve(__dirname), 'database.db');

const Database = {};
(async () => {
  try {
    const db = await new sqlite3.Database(path, sqlite3.OPEN_READWRITE);
    db.serialize(() => {
      db
          .run(createTableDriver)
          .run(createTableRider)
          .run(createTableTrip)
          .run(createTableInvoice);
    });
    Database.database = db;
  } catch (error) {
    log.debug(error);
  }
})();

module.exports = Database;
