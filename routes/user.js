const express = require("express");
const router = express.Router();
const { products } = require("./admin");

router.route("/(.html)?").get((req, res, next) => {
  res.render("user", { products, path: "/user" });
});

module.exports = router;
