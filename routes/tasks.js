const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
   deleteTask,
} = require("../controllers/tasks");

router
  .get("/", getAllTasks)
  .post("/", createTask)
 
  .get("/:id", getTask)
  .patch("/:id", updateTask)
  .delete("/:id", deleteTask);

module.exports = router;
