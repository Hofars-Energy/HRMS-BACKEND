const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { User, validate } = require("../Models/users");

router.get("/", async (req, res) => {
  const ab = await User.find().sort("name");
  res.send(ab);
});

router.get("/:id", async (req, res) => {
  const rt = await User.findById(req.params.id);
  if (!rt)
    return res.status(404).send("The user with the given id was not found");
  res.send(rt);
});

router.delete("/:id", async (req, res) => {
  const rt = await User.findByIdAndRemove(req.params.id);

  if (!rt)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(rt);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const rt = await User.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      password: req.body.password,
    },
    { new: true }
  );

  if (!rt)
    return res.status(404).send("The user with the given ID was not found.");

  res.send(rt);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const rt = new User({
      username: req.body.username,
      password: req.body.password,
    });
    await rt.save();
    res.send(rt);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
