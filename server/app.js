const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/user route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);

module.exports = app;
