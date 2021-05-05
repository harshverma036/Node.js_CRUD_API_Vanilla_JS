const Posts = require("../data/posts");

const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(Posts);
  });
};

module.exports = {
  findAll,
};
