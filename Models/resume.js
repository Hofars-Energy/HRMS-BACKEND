const mongoose = require("mongoose");
const ImageSchema = mongoose.Schema({
  type: String,
  data: Buffer,
});

const Res = mongoose.model("Image", ImageSchema);

module.exports.Res = Res;
