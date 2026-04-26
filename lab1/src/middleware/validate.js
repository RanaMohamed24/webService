function validateStudent(req, res, next) {
  const errors = [];
  const { name, age } = req.body;

  if (!name || typeof name !== "string" || name.trim() === "") {
    errors.push("name is required and must be a non-empty string");
  }

  if (age === undefined || age === null) {
    errors.push("age is required");
  } else if (!Number.isInteger(age) || age <= 0) {
    errors.push("age must be a positive integer");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
    });
  }

  next();
}

function validateCourse(req, res, next) {
  const errors = [];
  const { title } = req.body;

  if (!title || typeof title !== "string" || title.trim() === "") {
    errors.push("title is required and must be a non-empty string");
  }

  if (errors.length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
    });
  }

  next();
}

module.exports = { validateStudent, validateCourse };
