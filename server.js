const app = require("./index");
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server is listning at ${port} port`);
});
