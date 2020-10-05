/**
 * a little function that parse and stringify an object
 *
 */

const parsor = (val) => JSON.parse(val);

const stringify = (val1, val2) => JSON.stringify(val1, val2);

module.exports = {
  parsor,
  stringify
};
