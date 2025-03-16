const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment.controller");

// create comment
router.post("/:id/comment", commentController.createComment);
// update comment
router.put("/:id/comment/:commentId", commentController.updateComment);
// delete comment
router.delete("/:id/comment/:commentId", commentController.deleteComment);

module.exports = router;
