const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET: /api/products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi truy vấn sản phẩm" });
  }
});

// POST: /api/products (tạo sản phẩm mới nếu muốn)
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "Lỗi khi thêm sản phẩm" });
  }
});

module.exports = router;
