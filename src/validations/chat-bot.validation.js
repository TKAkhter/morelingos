const Joi = require('joi');

const chat = {
  body: Joi.object().keys({
    question: Joi.string().required(),
  }),
};


module.exports = {
  chat,
};
