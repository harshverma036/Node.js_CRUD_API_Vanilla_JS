const posts = require("../data/posts");
const { v4: uuid } = require("uuid");
const { insertDataToFile } = require("../utils");

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

const create = (post) => {
  return new Promise((resolve, reject) => {
    const content = { ...post, id: uuid() };
    posts.push(content);
    insertDataToFile("./data/posts.json", posts);
    resolve(content);
  });
};

module.exports = {
  findAll,
  findById,
  create,
};
