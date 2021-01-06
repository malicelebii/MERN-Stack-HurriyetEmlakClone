const express = require("express");
const router = express.Router();
const Ad = require("../models/Ad");

router.get("/", (req, res) => {
  res.send("calıs");
});

router.post("/", (req, res) => {
  let filters = req.body;
  console.log(filters);
  Ad.find(filters)
    .then((results) => res.json(results))
    .catch((err) => res.json(err));
});

module.exports = router;
