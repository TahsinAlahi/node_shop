const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const port = 8000;

app.use(bodyParser.urlencoded());

app.use("/");

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port " + port);
  }
});
