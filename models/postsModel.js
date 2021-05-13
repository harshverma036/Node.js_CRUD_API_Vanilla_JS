const posts = require("../data/posts");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(posts);
  });
};

const findById = (id) => {
  return new Promise((resolve, reject) => {
    const post = posts.find((p) => p.id === id);
    resolve(post);
  });
};

module.exports = {
  findAll,
  findById,
};
