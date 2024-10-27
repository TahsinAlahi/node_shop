const express = require("express");
const router = express.Router();

const {
  postProduct,
  adminGetProduct,
} = require("../controllers/productsController");

router.route("/(.html)?").get(adminGetProduct);

router.route("/add-product").post(postProduct);

module.exports = router;
