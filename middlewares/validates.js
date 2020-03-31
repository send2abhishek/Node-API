const joi = require("joi");

const validateNewCourse = (req, res, next) => {
  const Schema = joi.object().keys({
    name: joi
      .string()
      .min(3)
      .max(255)
      .required(),
    author: joi.string().required(),
    tags: joi.array().required(),
    isPublished: joi.boolean().required()
  });
  joi.validate(req.body, Schema, (err, value) => {
    if (err) {
      return res.status(400).json({
        message: err.message,
        responseCode: 701
      });
    }
    next();
  });
};

module.exports = {
  ValidateCourse: validateNewCourse
};
