const jsonServer = require("json-server");
var path = require('path');

const filePath = path.join("/tmp", "db.json");

const server = jsonServer.create();
const router = jsonServer.router(filePath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
