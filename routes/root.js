const router = require("express").Router();
const { products } = require("../routes/admin");

router.route("^/$|^/index(.html)?").get((req, res, next) => {
  res.render("index", { products });
});

module.exports = router;
