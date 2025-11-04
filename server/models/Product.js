const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  color: String,
  size: String,
  image: String,
  price: Number
});

module.exports = mongoose.model("Product", productSchema);
