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

const createPost = async (req, res) => {
  try {
    const post = {
      title: "New Post",
      content:
        "sit amet consectetur adipisicing elit. Doloremque ab voluptas dignissimos, cum reiciendis numquam, asperiores eveniet earum expedita suscipit officiis alias est adipisci illum nihil hic, cumque et assumenda!",
      user: "Admin",
    };

    const newPost = await Post.create(post);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(newPost));
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
};
