const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");

async function logEvent(message, filename) {
  const logTime = format(new Date(), "dd/MM/yyyy\tHH:mm:ss");
  const logMessage = `${logTime}\t ${message}`;

  if (!fs.existsSync(path(__dirname, "..", "log"))) {
    fs.mkdirSync(path(__dirname, "..", "log"));
  }

  try {
    await fsPromise.appendFile(path(__dirname, "..", filename), logMessage);
  } catch (err) {
    console.log(err);
  }
}

function logger(req, res, next) {
  logEvent(`${req.method} ${req.url}`, "reqLog.txt");
  next();
}

module.exports = { logEvent, logger };
