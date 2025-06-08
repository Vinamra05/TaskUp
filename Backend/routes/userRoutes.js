// const express = require("express");
// const router = express.Router();
// const {adminOnly, protect} = require("../middlewares/authMiddleware");
// const {getUsers,getUserById} = require("../controllers/userController");

// router.get("/",protect,adminOnly,getUsers);
// router.get("/:id",protect,getUserById);


// module.exports = router;


const express = require("express");
const router = express.Router();
const { adminOnly, protect } = require("../middlewares/authMiddleware");
const { getUsers, getUserById,deleteUser } = require("../controllers/userController");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: Admin/user management endpoints
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (Admin only)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 */
router.get("/", protect, adminOnly, getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Single user fetched successfully
 */
router.get("/:id", protect, getUserById);
router.delete("/:id", protect, adminOnly, deleteUser);
/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete user by ID (Admin only)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 */

module.exports = router;
