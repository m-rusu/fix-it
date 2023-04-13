const Joi = require('joi');

const userValidator = Joi.object({
  ID: Joi.number().integer().positive(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = userValidator;
