const mongoose = require("mongoose");

//call Schema class constructor
const courseSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  author: { type: String, required: true },
  tags: { type: Array, required: true },
  date: { type: Date, default: Date.now },
  isPublished: { type: Boolean }
});

// exports class
module.exports = mongoose.model("course", courseSchema);
