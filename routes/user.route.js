const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.get("/", userController.getAllUser);
// show posts of user
router.post("/", userController.createUser);
// get detail user
router.get("/:id", userController.getUserDetail);
// update user
router.put("/:id", userController.updateUser);
// delete user
router.delete("/:id", userController.deleteUser);

module.exports = router;
