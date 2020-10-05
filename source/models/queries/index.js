const createTableQueries = require('./create');
const insertQueries = require('./insert');
const readQueries = require('./read');
const updateQueries = require('./update');
const seedQueries = require('./seed');

const queries = {
  createTableQueries,
  insertQueries,
  readQueries,
  updateQueries,
  seedQueries
};

module.exports = queries;
