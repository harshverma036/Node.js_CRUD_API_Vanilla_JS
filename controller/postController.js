const Post = require("../models/postsModel");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(posts));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
};
