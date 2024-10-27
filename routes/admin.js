const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/rootDir");

router.route("/(.html)?").get((req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "admin.html"));
  res.render("admin");
});

router.route("/add-product").post((req, res, next) => {
  res.redirect("/");
});

module.exports = router;
