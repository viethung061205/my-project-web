const db = require("../config/db");
const express = require("express");
const router = express.Router();

// /api/products/man
router.get("/man", async (req, res) => {
  try {
    const database = await db();
    const products = await database.collection("man").find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// /api/products/woman
router.get("/woman", async (req, res) => {
  try {
    const database = await db();
    const products = await database.collection("woman").find({}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
