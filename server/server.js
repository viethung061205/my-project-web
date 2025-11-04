const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

// Route
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
