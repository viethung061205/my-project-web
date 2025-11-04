const express = require("express");
const router = express.Router();
const ManProduct = require("../models/ManProduct");
const WomanProduct = require("../models/WomanProduct");

// /api/products/man
router.get("/man", async (req, res) => {
  try {
    const products = await ManProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// /api/products/woman
router.get("/woman", async (req, res) => {
  try {
    const products = await WomanProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
