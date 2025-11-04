const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const Product = require("../models/Product");
var db = require('../config/db'); 
const { ObjectId } = require('mongodb');
=======
const ManProduct = require("../models/ManProduct");
const WomanProduct = require("../models/WomanProduct");
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f

// /api/products/man
router.get("/man", async (req, res) => {
  try {
<<<<<<< HEAD
    const database = await db(); 
    const products = await database.collection("products");
    const result = await products.find({}).toArray();
    res.json({products: result});
=======
    const products = await ManProduct.find();
    res.json(products);
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
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
/* GET: Lay all du lieu products. */ 
router.get('/:id', async function (req, res) { 
  try {
    const database = await db() ; 
    // Truy cap table products 
    const products = database.collection('products'); 
    // Thực hiện query 
    const result = await products.findOne({ _id: new ObjectId(req.params.id)}); 
    
    res.json({ products: result }); 
    } catch (err) {
      res.status(500).json({ error: "Lỗi khi truy vấn sản phẩm" });
  }
}); 

module.exports = router;
