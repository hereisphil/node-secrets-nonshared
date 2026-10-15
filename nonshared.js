const http = require("http");
const fs = require("fs");

const port = 3002;
const filenames = fs.readdirSync("./");

const server = http.createServer((_req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.end(filenames.join("\n"));
});

server.listen(port, "127.0.0.1", () => {
    console.log(`Server running on http://127.0.0.1:${port}`);
});
