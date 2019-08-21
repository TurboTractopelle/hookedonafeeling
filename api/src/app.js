const restify = require("restify");

function setupServer() {
  const server = restify.createServer({ name: "API hook" });

  server.get("/", getHome);

  function getHome(req, res, next) {
    res.send("gg");
    next;
  }
  return server;
}

module.exports = setupServer;
