const { courses, getNextCourseId } = require("../data/store");

function getAllCourses(req, res) {
  res.status(200).json(courses);
}

function getCourseById(req, res) {
  const id = parseInt(req.params.id, 10);
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return res.status(404).json({
      error: "Course not found",
      courseId: id,
    });
  }

  res.status(200).json(course);
}

function createCourse(req, res) {
  const { title } = req.body;

  const newCourse = {
    id: getNextCourseId(),
    title: title.trim(),
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
}

function updateCourse(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = courses.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Course not found",
      courseId: id,
    });
  }

  const { title } = req.body;

  courses[index] = {
    id,
    title: title.trim(),
  };

  res.status(200).json(courses[index]);
}

function deleteCourse(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = courses.findIndex((c) => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Course not found",
      courseId: id,
    });
  }

  const deleted = courses.splice(index, 1)[0];

  res.status(200).json({
    message: "Course deleted successfully",
    course: deleted,
  });
}

module.exports = {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
};
