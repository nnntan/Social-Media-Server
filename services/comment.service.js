const postModel = require("../models/post.model");

const createComment = async (postId, comment = {}) => {
  try {
    const result = await postModel.findByIdAndUpdate(
      postId,
      {
        $push: {
          post_comments: comment,
        },
      },
      { new: true }
    );

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateComment = async (postId, commentId, data) => {
  try {
    const result = await postModel.findOneAndUpdate(
      {
        _id: postId,
        "post_comments._id": commentId,
      },
      {
        $set: {
          "post_comments.$.comment_text": data.comment_text,
          "post_comments.$.comment_author": data.comment_author,
        },
      },
      { new: true }
    );

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteComment = async (postId, commentId) => {
  try {
    const result = await postModel.findByIdAndUpdate(
      postId,
      {
        $pull: {
          post_comments: { _id: commentId },
        },
      },
      { new: true }
    );
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createComment,
  updateComment,
  deleteComment,
};
