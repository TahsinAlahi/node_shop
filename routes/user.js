const express = require("express");
const router = express.Router();

router.route("/(.html)?").get((req, res, next) => {
  res.render("user");
});

module.exports = router;
