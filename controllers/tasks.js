const Task = require("../models/task")


const getAllTasks = async (req, res, next) => {

    try {
        const allTasks = await Task.find({})
        res.status(200).json({ tasks:allTasks });
    } catch (error) {
        res.status(500).json({msg: error})
    }
 
};

const createTask = async(req, res, next) => {
    try{
        const tasks = await Task.create(req.body)
         res.status(201).json({ tasks});
    }catch(error){
        res.status(500).json({msg: error})
    }

    
};

const getTask = async (req, res, next) => {
  res.json({id: req.params.id});
};

const updateTask = (req, res, next) => {
  res.send("update tasks");
};

const deleteTask = (req, res, next) => {
  res.send("delete tasks");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
