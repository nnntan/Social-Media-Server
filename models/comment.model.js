const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment_text: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 255,
    },
    comment_author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = commentSchema;
