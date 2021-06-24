const { string } = require("joi");
const Joi = require("joi");
const mongoose = require("mongoose");

const reqSchema = new mongoose.Schema({
  reqNum: {
    type: String,
    required: true,
    minlength: 3,
  },
  reqType: {
    type: String,
    require: true,
  },
  branch: {
    require: true,
    type: String,
  },
  department: {
    type: String,
    require: true,
  },
  designation: {
    type: String,
    require: true,
  },
  due: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  experience: {
    type: Number,
    require: true,
  },
  pendingwith: {
    type: String,
    require: true,
  },
});

function validator(body) {
  const schema = Joi.object({
    reqNum: Joi.string().min(3).required(),
    branch: Joi.string().required(),
    reqType: Joi.string().required(),
    department: Joi.string().min(1).required(),
    designation: Joi.string().required(),
    due: Joi.string().required(),
    status: Joi.string().required(),
    experience: Joi.number().required(),
    pendingwith: Joi.string().required(),
  });
  return schema.validate(body);
}

const Req = mongoose.model("Request", reqSchema);
exports.Req = Req;
exports.validate = validator;
