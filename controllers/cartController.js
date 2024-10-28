function getCurtProduct(req, res, next) {
  res.render("shop/cart", { path: "/cart" });
}

module.exports = { getCurtProduct };
