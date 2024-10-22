const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { logger } = require("./middleware/logEvent");

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", logger);

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port " + port);
  }
});
