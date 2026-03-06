const express = require("express");
const cors = require("cors");

const playRouter = require("./routes/play");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", playRouter);

module.exports = app;





