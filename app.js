const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const coffeecupsRouter = require("./routes/coffeecups");

mongoose.connect("mongodb://127.0.0.1:27017/coffeecup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log("Connected to mongodb successfully!");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/coffeecups", coffeecupsRouter);

module.exports = app;
