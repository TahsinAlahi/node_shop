const { logEvent } = require("./logEvent");

function errorHandler(err, req, res, next) {
  logEvent(`${err.name} : ${err.message}`, "errorLog.txt");
  console.error(err);
  res.status(500).send(err.message);
}

module.exports = errorHandler;
