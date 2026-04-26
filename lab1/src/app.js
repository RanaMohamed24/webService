const express = require("express");
const studentRoutes = require("./routes/students");
const courseRoutes = require("./routes/courses");
const notFound = require("./middleware/notFound");

const app = express();

app.use(express.json());

app.use("/students", studentRoutes);
app.use("/courses", courseRoutes);

app.use(notFound);

module.exports = app;
