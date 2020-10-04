const log = require('./logger');

const internalError = (err, res) => {
  log.error(err);
  return res.status(500).json({ status: 'failed', message: 'Internal server error' });
};

module.exports = internalError;
