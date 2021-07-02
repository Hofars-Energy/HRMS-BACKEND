const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { Req, validate } = require("../Models/req");

router.get("/", async (req, res) => {
  const ab = await Req.find().sort("name");
  res.send(ab);
});

router.get("/:id", async (req, res) => {
  const rt = await Req.findById(req.params.id);
  if (!rt)
    return res
      .status(404)
      .send("The rterequestry with the given id was not found");
  res.send(rt);
});

router.delete("/:id", async (req, res) => {
  const rt = await Req.findByIdAndRemove(req.params.id);

  if (!rt)
    return res.status(404).send("The request with the given ID was not found.");

  res.send(rt);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const {
    firstName,
    lastName,
    requestType,
    department,
    postionClass,
    costCentre,
    designation,
    role,
    employmentType,
    branch,
    grade,
    businessType,
    applicableTo,
    dueDate,
    workExperience,
    Qualification,
    ctc,
    priority,
    specialization,
  } = req.body;
  const rt = await Req.findByIdAndUpdate(
    req.params.id,
    {
      firstName: firstName,
      lastName: lastName,
      requestType: requestType,
      department: department,
      postionClass: postionClass,
      costCentre: costCentre,
      designation: designation,
      role: role,
      employmentType: employmentType,
      branch: branch,
      grade: grade,
      businessType: businessType,
      applicableTo: applicableTo,
      dueDate: dueDate,
      workExperience: workExperience,
      Qualification: Qualification,
      ctc: ctc,
      priority: priority,
      specialization: specialization,
    },
    { new: true }
  );

  if (!rt)
    return res.status(404).send("The request with the given ID was not found.");

  res.send(rt);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const {
      firstName,
      lastName,
      requestType,
      department,
      postionClass,
      costCentre,
      designation,
      role,
      employmentType,
      branch,
      grade,
      businessType,
      applicableTo,
      dueDate,
      workExperience,
      Qualification,
      ctc,
      priority,
      specialization,
    } = req.body;
    const rt = new Req({
      firstName: firstName,
      lastName: lastName,
      requestType: requestType,
      department: department,
      postionClass: postionClass,
      costCentre: costCentre,
      designation: designation,
      role: role,
      employmentType: employmentType,
      branch: branch,
      grade: grade,
      businessType: businessType,
      applicableTo: applicableTo,
      dueDate: dueDate,
      workExperience: workExperience,
      Qualification: Qualification,
      ctc: ctc,
      priority: priority,
      specialization: specialization,
    });
    await rt.save();
    res.send(rt);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
