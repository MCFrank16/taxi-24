const createTableQueries = require('./create');
const insertQueries = require('./insert');
const readQueries = require('./read');
const seedQueries = require('./seed');

const queries = {
  createTableQueries,
  insertQueries,
  readQueries,
  seedQueries
};

module.exports = queries;
