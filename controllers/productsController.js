const products = [];

function postProduct(req, res, next) {
  products.push({ title: req.body.title });
  res.redirect("/");
}

function adminGetProduct(req, res, next) {
  res.render("admin", { path: "/admin" });
}

function getUserProducts(req, res, next) {
  res.render("user", { products, path: "/user" });
}

module.exports = { postProduct, adminGetProduct, getUserProducts, products };
