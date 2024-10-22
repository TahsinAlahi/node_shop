const express = require("express");
const router = express.Router();
const path = require("path");

router.route("/(.html)?").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "admin.html"));
});

router.route("/add-product").post((req, res, next) => {
  res.redirect("/");
});

module.exports = router;
