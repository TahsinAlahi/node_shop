const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { logger } = require("./middleware/logEvent");
const path = require("path");
const rootDir = require("./util/rootDir");

const port = 8000;

app.set("view engine", "ejs");

app.use(express.static(path.join(rootDir, "views")));
app.use(express.static(path.join(rootDir, "public")));

// logger
app.use(logger);

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", require("./routes/admin"));
app.use("/user", require("./routes/user"));
app.use("/", require("./routes/root"));

app.use("*", require("./routes/404"));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is running on port " + port);
  }
});
