const mongoose = require("mongoose");

const manProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  size: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("ManProduct", manProductSchema, "man");
