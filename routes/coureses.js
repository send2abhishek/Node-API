const express = require("express");
const router = express.Router();
const course = require("../controllers/courses");
const validateCourse = require("../middlewares/validates");

router.get("/", course.getAllCourses);

router.get("/:id", course.particularCourse);

router.post("/", validateCourse.ValidateCourse, course.newCourse);
router.put("/:id", course.updateCourse);

router.delete("/:id", course.deleteCourse);

module.exports = {
  AppRouter: router
};
