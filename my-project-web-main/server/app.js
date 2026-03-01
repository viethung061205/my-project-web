const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/user route");
const ticketRoute = require("./routes/ticket route");
const vnpayRoute = require("./routes/vnpay route");

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use("/api/user", userRoute);
app.use("/api/ticket", ticketRoute);
app.use("/api/vnpay", vnpayRoute);

module.exports = app;
