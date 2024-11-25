const express = require("express");
const route = express.Router();

// import
const { createTask, getTask, deleteTask, updateTask } = require("../Controller/taskController")


// api
route.get("/", getTask);
route.post("/", createTask);
route.patch("/:id", updateTask);
route.delete("/:id", deleteTask);

// export
module.exports = route;