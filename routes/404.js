const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/rootDir");

router.route("/").get((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
