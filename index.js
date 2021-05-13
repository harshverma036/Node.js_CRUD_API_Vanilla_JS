const http = require("http");
const {
  getAllPosts,
  getPost,
  createPost,
} = require("./controller/postController");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/text" });
    res.end("API is running...");
  } else if (req.url === "/api/posts" && req.method === "GET") {
    getAllPosts(req, res);
  } else if (req.url.match(/\/api\/post\/([0-9]+)/) && req.method === "GET") {
    const id = Number(req.url.split("/")[3]);
    getPost(req, res, id);
  } else if (req.url.match("/api/posts") && req.method === "POST") {
    createPost(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found!" }));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
