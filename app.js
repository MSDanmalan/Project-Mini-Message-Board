const express = require("express");
const app = express();
const path = require("node:path");
const newRouter = require("./routes/newRouter");
const indexRouter = require("./routes/indexRouter");
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/new", newRouter);
app.use("/", indexRouter);

const PORT = 8080;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My Express app - listening on port ${PORT}!`);
});
