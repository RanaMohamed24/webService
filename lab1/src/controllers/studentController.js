const { students, getNextStudentId } = require("../data/store");

function getAllStudents(req, res) {
  res.status(200).json(students);
}

function getStudentById(req, res) {
  const id = parseInt(req.params.id, 10);
  const student = students.find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({
      error: "Student not found",
      studentId: id,
    });
  }

  res.status(200).json(student);
}

function createStudent(req, res) {
  const { name, age } = req.body;

  const newStudent = {
    id: getNextStudentId(),
    name: name.trim(),
    age,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
}

function updateStudent(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Student not found",
      studentId: id,
    });
  }

  const { name, age } = req.body;

  students[index] = {
    id,
    name: name.trim(),
    age,
  };

  res.status(200).json(students[index]);
}

function deleteStudent(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = students.findIndex((s) => s.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Student not found",
      studentId: id,
    });
  }

  const deleted = students.splice(index, 1)[0];

  res.status(200).json({
    message: "Student deleted successfully",
    student: deleted,
  });
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
