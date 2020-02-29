const express = require("express");
const Joi = require("joi");
const app = express();

// enabling json body
app.use(express.json());

const courses = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  { id: 4, name: "Course 4" },
  { id: 5, name: "Course 5" },
  { id: 6, name: "Course 6" },
  { id: 7, name: "Course 7" }
];

app.get("/", (req, res) => {
  res.status(203).json({
    msg: "laura"
  });
});

app.get("/api/courses/", (req, res) => {
  res.status(200).json(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  course != null
    ? res.status(200).json(course)
    : res.status(404).json({ error: "Course not found" });
});

app.post("/api/courses/", (req, res) => {
  const { error } = validateError(req.body);
  if (error) {
    res.status(400).json({ err: error.details[0].message });
    return;
  }

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.status(201).json({ msg: "Course created", course });
});

app.put("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course != null) {
    const { error } = validateError(req.body);
    if (error) {
      res.status(400).json({ err: error.details[0].message });
      return;
    } else {
      course.name = req.body.name;
      res.status(202).json({ msg: "Course updated", course });
    }
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

app.delete("/api/courses/:id", (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (course != null) {
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.status(202).json({ msg: "Course deleted", course });
  } else {
    res.status(404).json({ error: "Course not found" });
  }
});

function validateError(course) {
  const Schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, Schema);
}

module.exports = app;
