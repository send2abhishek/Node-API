const app = require("./index");
const http = require("http");
const server = http.createServer(app);
const port = 3000;
server.listen(port, () => {
  console.log(`server is listning at ${port} port`);
});
