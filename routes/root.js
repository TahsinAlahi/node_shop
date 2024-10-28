const router = require("express").Router();
const { getAllProducts } = require("../controllers/productsController");

router.route("^/$|^/index(.html)?").get(getAllProducts);

module.exports = router;
