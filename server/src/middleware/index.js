const express = require("express");
const cors = require("cors");
const carsRoutes = require("../routes/route");

const app = express();

app.use(cors({ origin: /\.herokuapp\.com$/ }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", carsRoutes);

module.exports = app;
