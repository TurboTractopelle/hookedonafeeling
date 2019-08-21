const restify = require("restify");
const setupVilleRoutes = require("./controllers/villes");

function setupServer() {
  const server = restify.createServer({ name: "API hook" });
  setupVilleRoutes(server);

  server.get("/", getHome);

  function getHome(req, res, next) {
    res.send("home test ok");
    next;
  }
  return server;
}

module.exports = setupServer;
