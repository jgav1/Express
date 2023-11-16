const express = require("express");

const app = express();

app.set("serverName", "servidor prueba HTTP Operations");

app.listen(3000);
console.log("Server on port ${3000} " + app.get("serverName"));