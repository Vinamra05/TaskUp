const express = require("express");
const router = express.Router();
const {adminOnly, protect} = require("../middlewares/authMiddleware");
const {getUsers,getUserById} = require("../controllers/userController");

router.get("/",protect,adminOnly,getUsers);
router.get("/:id",protect,getUserById);


module.exports = router;