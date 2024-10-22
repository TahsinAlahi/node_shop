const express = require("express");
const router = require("express").Router();
const path = require("path");

router.route("^/$|^/index(.html)?").get((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

module.exports = router;
