let studentIdCounter = 1;
let courseIdCounter = 1;

const students = [];
const courses = [];

module.exports = {
  students,
  courses,
  getNextStudentId: () => studentIdCounter++,
  getNextCourseId: () => courseIdCounter++,
};
