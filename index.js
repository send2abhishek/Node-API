const express = require("express");
const app = express();
const morgan = require("morgan");
const config = require("config");
const courses = require("./routes/coureses");
const mongoose = require("mongoose");

// enabling json body
// built middleware function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
console.log("Application name", config.get("name"));
//console.log("Application password", process.env.app_password);

if (
  process.env.NODE_ENV === "development" ||
  app.get("env") === "development"
) {
  // middleware for logging http requests
  app.use(morgan("dev"));
  console.log(`Enviroment of the application ${app.get("env")}`);
}

app.use("/api/courses/", courses.AppRouter);

mongoose
  .connect(config.get("dburl"), {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(response => {
    console.log(config.get("dbconnectMsg"));
  })
  .catch(err => {
    console.log(config.get("dbConnectError"));
  });

module.exports = app;
