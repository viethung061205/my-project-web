const express = require("express");
const mongoose = require("mongoose");
<<<<<<< HEAD
const connectDB = require("./config/db");
const Log = require("./routes/auth");
=======
const cors = require("cors");

>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
const app = express();
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
connectDB();

/*Kết nối MongoDB local (Compass mặc định)
mongoose.connect("mongodb://127.0.0.1:27017/productdb", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
*/
// Import routes
=======
// Kết nối MongoDB
mongoose.connect("mongodb://localhost:27017/productdb", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

// Route
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
const productRoutes = require("./routes/products");
app.use("/api/products", productRoutes);
app.use("/api/auth", Log);

<<<<<<< HEAD
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
=======
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
>>>>>>> 0ceaabc2ba0852df604e5ac9ef596095fcbd582f
});
