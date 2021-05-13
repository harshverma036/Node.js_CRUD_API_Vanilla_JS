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

const getPost = async (req, res, id) => {
  const singlePost = await Post.findById(id);

  if (singlePost) {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(singlePost));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Post Not Found.." }));
  }
};

module.exports = {
  getAllPosts,
  getPost,
};
