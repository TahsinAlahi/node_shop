const path = require("path");
const rootDir = require("../util/rootDir");

function handle404(req, res, next) {
  res.sendFile(path.join(rootDir, "views", "404.html"));
}

module.exports = { handle404 };
