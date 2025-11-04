const mongoose = require("mongoose");

const womanProductSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  size: String,
  price: Number,
  image: String
});

module.exports = mongoose.model("WomanProduct", womanProductSchema, "woman");
