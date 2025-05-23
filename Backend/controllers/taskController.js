const Task = require("../models/Task");


const getTasks = async (req, res) => {
    try {
        const { status } = req.query;
        let filter =  {};

        if (status) {
            filter.status = status;
        }

        let tasks;

        if(req.user.role === 'admin') {
            tasks = await Task.find(filter).populate('assignedTo', 'name email profileImageUrl');
        }
        else {
            tasks = await Task.find({ assignedTo: req.user._id, ...filter }).populate('assignedTo', 'name email profileImageUrl');
        }

        tasks = await Promise.all(tasks.map(async (task) => {
            const completedCount = task.todoChecklist.filter(item => item.completed).length;
            return {
                ...task._doc,
                completedTodoCount: completedCount,
            };
        }
        ));

        const allTasks = await Task.countDocuments(
            req.user.role === 'admin' ? {} : { assignedTo: req.user._id }
        );

        const pendingTasks = await Task.countDocuments({
            ...filter,
            status: 'Pending',
            ...(req.user.role !== 'admin' && { assignedTo: req.user._id }),
        });

        const inProgressTasks = await Task.countDocuments({
            ...filter,
            status: 'In Progress',
            ...(req.user.role !== 'admin' && { assignedTo: req.user._id }),
        });

        const completedTasks = await Task.countDocuments({
            ...filter,
            status: 'Completed',
            ...(req.user.role !== 'admin' && { assignedTo: req.user._id }),
        });

        res.json({
            tasks,
            statusSummary: {
                all: allTasks,
                pendingTasks,
                inProgressTasks,
                completedTasks,
            },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks' });
    }
};


const getTaskById = async (req, res) => {
    
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      todoChecklist,
    } = req.body;
    if (!Array.isArray(assignedTo)) {
      return res
        .status(400)
        .json({ message: "assignedTo should be an array of User IDs " });
    }
    const task = new Task({
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      createdBy: req.user._id,
      todoChecklist,
    });
    await task.save();

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
