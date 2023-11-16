const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const read = fs.createReadStream("./static/index.html");
    read.pipe(res);
   // res.sendDate("Saludos al equipo 8");
});

server.listen(3000);
console.log("Server on port ${3000}");