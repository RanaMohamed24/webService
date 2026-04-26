const express = require("express");
const router = express.Router();
const { validateCourse } = require("../middleware/validate");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseController");

router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.post("/", validateCourse, createCourse);

router.put("/:id", validateCourse, updateCourse);

router.delete("/:id", deleteCourse);

module.exports = router;
