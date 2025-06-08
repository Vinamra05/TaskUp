const Task = require("../models/Task");

const User = require("../models/User");


const getUsers = async (req, res) => {
  try {
    const users = await User.find({ role: "member" }).select("-password");

    const usersWithTasksCounts = await Promise.all(
      users.map(async (user) => {
        const pendingTasks = await task.countDocuments({
          assignedTo: user._id,
          status: "Pending",
        });
        const inProgressTasks = await task.countDocuments({
          assignedTo: user._id,
          status: "In Progress",
        });
        const completedTasks = await task.countDocuments({
          assignedTo: user._id,
          status: "Completed",
        });

        return {
          ...user._doc,
          pendingTasks,
          inProgressTasks,
          completedTasks,
        };
      })
    );

    res.json(usersWithTasksCounts);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found.." });
    }
    await user.deleteOne();
    await Task.updateMany(
      {
        assignedTo: user._id,
      },
      { $pull: { assignedTo: user._id } }
    );

    res.status(200).json({message:"user deleted Successfully"});
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserById,
  deleteUser
};
