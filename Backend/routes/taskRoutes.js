// const express = require("express");
// const {protect,adminOnly} = require("../middlewares/authMiddleware");
// const { getUserDashboardData, getTasks, getTaskById, createTask, deleteTask, updateTask, updateTaskStatus, updateTaskChecklist, getDashboardData } = require("../controllers/taskController");


// const router = express.Router();


// router.get("/dashboard-data",protect,adminOnly,getDashboardData);
// router.get("/user-dashboard-data",protect,getUserDashboardData);
// router.get("/",protect,getTasks);
// router.get("/:id",protect,getTaskById);
// router.post("/",protect,adminOnly,createTask);
// router.put("/:id",protect,updateTask);
// router.delete("/:id",protect,adminOnly,deleteTask);
// router.put("/:id/status",protect,updateTaskStatus);
// router.put("/:id/todo",protect,updateTaskChecklist);


// module.exports = router;


const express = require("express");
const {
  protect,
  adminOnly,
} = require("../middlewares/authMiddleware");

const {
  getUserDashboardData,
  getTasks,
  getTaskById,
  createTask,
  deleteTask,
  updateTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
} = require("../controllers/taskController");

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Task
 *   description: Task management and dashboard operations
 */

/**
 * @swagger
 * /api/task/dashboard-data:
 *   get:
 *     summary: Get admin dashboard data
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Admin dashboard data fetched
 */
router.get("/dashboard-data", protect, adminOnly, getDashboardData);

/**
 * @swagger
 * /api/task/user-dashboard-data:
 *   get:
 *     summary: Get user dashboard data
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User dashboard data fetched
 */
router.get("/user-dashboard-data", protect, getUserDashboardData);

/**
 * @swagger
 * /api/task:
 *   get:
 *     summary: Get all tasks
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of tasks
 */
router.get("/", protect, getTasks);

/**
 * @swagger
 * /api/task/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task data fetched
 */
router.get("/:id", protect, getTaskById);

/**
 * @swagger
 * /api/task:
 *   post:
 *     summary: Create a new task (Admin only)
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task created
 */
router.post("/", protect, adminOnly, createTask);

/**
 * @swagger
 * /api/task/{id}:
 *   put:
 *     summary: Update task by ID
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task updated
 */
router.put("/:id", protect, updateTask);

/**
 * @swagger
 * /api/task/{id}:
 *   delete:
 *     summary: Delete task by ID (Admin only)
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     responses:
 *       200:
 *         description: Task deleted
 */
router.delete("/:id", protect, adminOnly, deleteTask);

/**
 * @swagger
 * /api/task/{id}/status:
 *   put:
 *     summary: Update task status
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in-progress, completed]
 *     responses:
 *       200:
 *         description: Task status updated
 */
router.put("/:id/status", protect, updateTaskStatus);

/**
 * @swagger
 * /api/task/{id}/todo:
 *   put:
 *     summary: Update task checklist (todo)
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Task ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               checklist:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     item:
 *                       type: string
 *                     done:
 *                       type: boolean
 *     responses:
 *       200:
 *         description: Task checklist updated
 */
router.put("/:id/todo", protect, updateTaskChecklist);

module.exports = router;
