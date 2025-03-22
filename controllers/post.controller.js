const {
  getAllPost,
  getPostDetail,
  createPost,
  updatePost,
  deletePost,
} = require("../services/post.service");

class PostController {
  async getAllPost(req, res) {
    try {
      const posts = await getAllPost(req.query);
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async getPostDetail(req, res) {
    try {
      const post = await getPostDetail(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async createPost(req, res) {
    try {
      const post = await createPost(req.body);
      return res.status(201).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async updatePost(req, res) {
    try {
      const post = await updatePost(req.params.id, req.body);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      const post = await deletePost(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PostController();
