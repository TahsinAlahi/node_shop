const express = require("express");
const app = express();

const port = 8000;

app.use("/", (req, res, next) => {});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port " + port);
  }
});
