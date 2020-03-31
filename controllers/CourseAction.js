const mongoose = require("mongoose");
const Course = require("../models/courses");

const newCourse = async body => {
  const course = new Course({
    _id: new mongoose.Types.ObjectId(),
    name: body.name,
    author: body.author,
    tags: body.tags,
    isPublished: body.isPublished
  });

  try {
    const result = await course.save();
    return { result: result, success: true };
  } catch (ex) {
    return { result: ex, success: false };
  }
};

module.exports = {
  courseNew: newCourse
};
