const express = require("express");
const router = express.Router();
const { validateStudent } = require("../middleware/validate");
const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

router.get("/", getAllStudents);

router.get("/:id", getStudentById);

router.post("/", validateStudent, createStudent);

router.put("/:id", validateStudent, updateStudent);

router.delete("/:id", deleteStudent);

module.exports = router;
