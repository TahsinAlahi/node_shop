const { Product } = require("../models/product");

function postProduct(req, res, next) {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
}

function adminGetProduct(req, res, next) {
  res.render("admin/add-product", { path: "/admin" });
}

async function getUserProducts(req, res, next) {
  const products = await Product.fetchAllProducts();
  res.render("shop/product-list", { products, path: "/product-list" });
}

async function getAllProducts(req, res, next) {
  const products = await Product.fetchAllProducts();
  res.render("index", { products, path: "/" });
}

module.exports = {
  postProduct,
  adminGetProduct,
  getUserProducts,
  getAllProducts,
};
