const dev = require('./dev');
const test = require('./test');
const prod = require('./prod');

if (process.env.NODE_ENV === 'dev') {
  module.exports = dev;
} else if (process.env.NODE_ENV === 'test') {
  module.exports = test;
} else {
  module.exports = prod;
}
