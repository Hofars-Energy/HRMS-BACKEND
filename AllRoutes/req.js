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

  const rt = await Req.findByIdAndUpdate(
    req.params.id,
    {
      reqNum: req.body.reqNum,
      branch: req.body.branch,
      reqType: req.body.reqType,
      department: req.body.department,
      designation: req.body.designation,
      due: req.body.due,
      status: req.body.status,
      experience: req.body.experience,
      pendingwith: req.body.pendingwith,
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
    const rt = new Req({
      reqNum: req.body.reqNum,
      branch: req.body.branch,
      reqType: req.body.reqType,
      department: req.body.department,
      designation: req.body.designation,
      due: req.body.due,
      status: req.body.status,
      experience: req.body.experience,
      pendingwith: req.body.pendingwith,
    });
    await rt.save();
    res.send(rt);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
