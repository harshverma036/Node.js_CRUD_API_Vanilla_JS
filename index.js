const http = require("http");
const posts = require("./data/posts");

const server = http.createServer((req, res) => {
  //   res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/html");
  //   res.write("<h1>Hello nodejs api</h1>");
  //   res.end();
  // INSTEAD OF USING THIS LONG CODE WE CAN ALSO USE
  // SHORTHAND OF THIS.
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/text" });
    res.end("API is running...");
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found!" }));
  }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));
