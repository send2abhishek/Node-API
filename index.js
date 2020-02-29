const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(203).json({
    msg: "laura"
  });
});
module.exports = app;
