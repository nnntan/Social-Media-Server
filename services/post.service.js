const postModel = require("../models/post.model");

const createPost = async (data) => {
  try {
    const post = await postModel.create(data);
    return post;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllPost = async (query) => {
  try {
    const posts = await postModel.aggregate([
      {
        $lookup: {
          from: "users",
          localField: "post_author",
          foreignField: "_id",
          as: "post_author",
        },
      },
      {
        $unwind: "$post_author",
      },
    ]);

    return posts;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getPostDetail = async (id) => {
  try {
    return await postModel.findById(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

const updatePost = async (id, data) => {
  try {
    return await postModel.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error(error.message);
  }
};

const deletePost = async (id) => {
  try {
    return await postModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createPost,
  getAllPost,
  getPostDetail,
  updatePost,
  deletePost,
};
