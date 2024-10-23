const router = require("express").Router();
const path = require("path");
const rootDir = require("../util/rootDir");

router.route("^/$|^/index(.html)?").get((req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});

module.exports = router;
