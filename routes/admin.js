const express = require("express");
const router = express.Router();

const {
  postProduct,
  adminGetProduct,
} = require("../controllers/productsController");

router.route("/(.html)?");

router.route("/add-product").get(adminGetProduct).post(postProduct);

module.exports = router;
