const express = require("express");
const router = express.Router();

const { getCurtProduct } = require("../controllers/cartController");

router.route("/").get(getCurtProduct);

module.exports = router;
