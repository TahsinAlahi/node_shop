const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/rootDir");

const products = [];

router.route("/(.html)?").get((req, res, next) => {
  res.render("admin", { path: "/admin" });
});

router.route("/add-product").post((req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

module.exports = { router, products };
