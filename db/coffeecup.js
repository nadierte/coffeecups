const mongoose = require("mongoose");

const coffeeCupSchema = new mongoose.Schema({
  size: String,
  color: String,
  hasLid: Boolean,
  hasSleeve: Boolean,
});

const CoffeeCup = mongoose.model("CoffeeCup", coffeeCupSchema);

module.exports = CoffeeCup;
