const router = require("express").Router();
const { products } = require("../controllers/productsController");

router.route("^/$|^/index(.html)?").get((req, res, next) => {
  res.render("index", { products, path: "/" });
});

module.exports = router;
