const express = require("express");
const router = express.Router();
const postController = require("../controllers/post.controller");

router.get("/", postController.getAllPost);
// query params
router.post("/", postController.createPost);
// update post
router.put("/:id", postController.updatePost);
// delete post
router.delete("/:id", postController.deletePost);
// get detail post
router.get("/:id", postController.getPostDetail);

module.exports = router;
