const {
  createComment,
  updateComment,
  deleteComment,
} = require("../services/comment.service");

class commentController {
  async createComment(req, res) {
    try {
      const result = await createComment(req.params.id, req.body);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updateComment(req, res) {
    try {
      const result = await updateComment(
        req.params.id,
        req.params.commentId,
        req.body
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deleteComment(req, res) {
    try {
      const result = await deleteComment(req.params.id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new commentController();
