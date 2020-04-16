const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      reqired: true,
    },
    body: {
      type: String,
      reqired: true,
    },
    author: {
      type: String,
      reqired: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
