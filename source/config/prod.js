const { resolve, join } = require('path');

module.exports = {
  path: join(resolve(process.cwd()), '/source/models/prod.db')
};
