const express = require("express");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/user route");
const ticketRoute = require("./routes/ticket route");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoute);
app.use("/api/ticket", ticketRoute);

module.exports = app;
