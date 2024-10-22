const express = require("express");
const router = express.Router();
const path = require("path");

router.route("/").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "404.html"));
});

module.exports = router;
