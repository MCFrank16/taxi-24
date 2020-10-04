const Joi = require('joi');


/**
 *
 * this helper function will aid in validating the request body
 * @exports an object containing all the validation constraints
 *
 */


const ID = Joi.string().guid({ version: 'uuidv4' });

const name = Joi.string()
  .trim()
  .regex(/^[a-zA-Z]+$/)
  .min(3);

const Email = Joi.string()
  .email()
  .regex(/^[a-zA-Z0-9]+([.\-_][a-z0-9]+)*@[a-z0-9]+([.\-_][a-z0-9]+)*\.[a-z]{2,}$/)
  .trim();

const phoneNumber = Joi.string()
  .regex(/^\+2507[0-9]{8}$/);


module.exports = {
  createDriver: Joi.object().keys({
    id: ID,
    firstname: name.required(),
    lastname: name.required(),
    email: Email.required(),
    phonenumber: phoneNumber.required(),
    gender: name.required()
  }),
  createRider: Joi.object().keys({
    id: ID,
    firstname: name.required(),
    lastname: name.required(),
    email: Email.required(),
    phonenumber: phoneNumber.required()
  })
};
