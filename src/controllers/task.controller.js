import Task from "../models/Task";

export const findAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message || "something goes wrong retrieving the tasks",
    });
  }
};

export const createTask = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({ message: "Content cannot be empty" });
  }
  try {
    const newTask = new Task({
      title: req.body.title,
      description: req.body.description,
      done: req.body.done,
    });
    const taskSaved = await newTask.save();
    res.json(taskSaved);
  } catch (error) {
    res.status(500).json({
      message: error.message || "something goes wrong creating a task",
    });
  }
};

export const findOneTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  res.json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({
    message: "Task were deleted successfully",
  });
};

export const findAllDoneTasks = async (req, res) => {
  const tasks = await Task.find({ done: true });
  res.json(tasks);
};

export const updateTasks = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: "Task was updated successfully" });
};
