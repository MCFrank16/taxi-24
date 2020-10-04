const _ = require('lodash');

const Schemas = require('../helper/schemas');

module.exports = (schema) => {
  const allowedMethod = ['post', 'put', 'patch'];

  // eslint-disable-next-line consistent-return
  return async (req, res, next) => {
    const method = req.method.toLowerCase();

    if (_.includes(allowedMethod, method) && _.has(Schemas, schema)) {
      const currentSchema = _.get(Schemas, schema);

      if (currentSchema) {
        try {
          const value = await currentSchema.validateAsync(req.body);
          req.value = value;
          return next();
        } catch (error) {
          const { message } = error.details[0];
          return res.status(400).json({
            status: 'failed',
            message: message.replace(/['"]/g, '')
          });
        }
      }
    }
  };
};
