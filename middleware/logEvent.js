const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const { format } = require("date-fns");

async function logEvent(message, filename) {
  const logTime = format(new Date(), "dd/MM/yyyy\tHH:mm:ss");
  const logMessage = `${logTime} \t ${message}\n`;

  if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
    fs.mkdirSync(path.join(__dirname, "..", "logs"));
  }

  try {
    await fsPromise.appendFile(
      path.join(__dirname, "..", "logs", filename),
      logMessage
    );
  } catch (err) {
    console.log(err);
  }
}

function logger(req, res, next) {
  logEvent(`${req.method} ${req.url}`, "reqLog.txt");
  next();
}

module.exports = { logEvent, logger };
