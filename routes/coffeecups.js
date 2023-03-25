const express = require("express");
const CoffeeCup = require("../db/coffeecup");
const router = express.Router();

router.get("/", async function (req, res, next) {
  try {
    const { size, color, hasLid, hasSleeve } = req.query;
    const query = {};
    if (size) query.size = size;
    if (color) query.color = color;
    if (hasLid) query.hasLid = hasLid === "true";
    if (hasSleeve) query.hasSleeve = hasSleeve === "true";
    const coffeeCups = await CoffeeCup.find(query);
    return res.send(coffeeCups);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
