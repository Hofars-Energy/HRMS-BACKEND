const Joi = require("joi");
const mongoose = require("mongoose");
//  firstName: "",
// lastName: "",
// requestType: "",
// department: "",
// postionClass: "",
// costCentre: "",
// designation: "",
// role: "",
// employmentType: "",
// branch: "",
// grade: "",
// businessType: "",
// applicableTo: "",
// dueDate: "",
// workExperience: 0,
// Qualification: "",
// ctc: "",
// priority: "",
// specialization: "",

const reqSchema = new mongoose.Schema({
  firstName: { type: String, requried: true },
  lastName: { type: String, requried: true },
  requestType: { type: String, requried: true },
  department: { type: String, requried: true },
  postionClass: { type: String, requried: true },
  costCentre: { type: String, requried: true },
  designation: { type: String, requried: true },
  role: { type: String, requried: true },
  employmentType: { type: String, requried: true },
  branch: { type: String, requried: true },
  grade: { type: String, requried: true },
  businessType: { type: String, requried: true },
  applicableTo: { type: String, requried: true },
  dueDate: { type: String, requried: true },
  workExperience: { type: Number, requried: true },
  Qualification: { type: String, requried: true },
  ctc: { type: Number, requried: true },
  priority: { type: String },
  specialization: { type: String, requried: false },
});

function validator(body) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    requestType: Joi.string().required(),
    department: Joi.string().required(),
    postionClass: Joi.string().required(),
    costCentre: Joi.string().required(),
    designation: Joi.string().required(),
    role: Joi.string().required(),
    employmentType: Joi.string().required(),
    branch: Joi.string().required(),
    grade: Joi.string().required(),
    businessType: Joi.string().required(),
    applicableTo: Joi.string(),
    dueDate: Joi.string().required(),
    workExperience: Joi.number(),
    Qualification: Joi.string(),
    ctc: Joi.number(),
    priority: Joi.string(),
    specialization: Joi.string(),
  });
  return schema.validate(body);
}

const Req = mongoose.model("Request", reqSchema);
exports.Req = Req;
exports.validate = validator;
