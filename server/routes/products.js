const db = require("../config/db");
const express = require("express");
const router = express.Router();


// /api/products/man
router.get("/", async (req, res) => {
  try {
    const database = await db();
    const products = await database.collection("products")

    const result = await products.find({}).toArray(); 
    res.json({ products: result }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// /api/products/man
router.get("/man", async (req, res) => {
  try {
    const database = await db();
    const products = await database.collection("man")

    const result = await products.find({}).toArray(); 
    res.json({ products: result }); 
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// /api/products/woman
router.get("/woman", async (req, res) => {
  try {
    const database = await db();
    const products = await database.collection("woman").find({gender: "woman"}).toArray();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
