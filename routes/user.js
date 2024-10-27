const express = require("express");
const router = express.Router();
const { products } = require("./admin");

router.route("/(.html)?").get((req, res, next) => {
  // const products = adminData.products;
  res.render("user", { products });
});

module.exports = router;
