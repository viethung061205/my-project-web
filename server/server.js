const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Kết nối MongoDB local (Compass mặc định)
mongoose.connect("mongodb://127.0.0.1:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Import routes
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
