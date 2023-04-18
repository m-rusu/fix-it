const Joi = require('joi');

module.exports = function validate(schema) {
    return function (req, res, next) {
        const result = schema.validate(req.body);

        if (result.error) {
            return res.status(400).json({ error: result.error.details[0].message });
        }

        next();
    }
}