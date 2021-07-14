const { string } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    require: true,
  },
});

function validator(body) {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    password: Joi.string().required(),
  });
  return schema.validate(body);
}

const user = mongoose.model("user", userSchema);
exports.User = user;
exports.validate = validator;
