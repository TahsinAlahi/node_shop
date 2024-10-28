const express = require("express");
const router = express.Router();
const { getUserProducts } = require("../controllers/productsController");

router.route("/(.html)?").get(getUserProducts);

module.exports = router;
