const restify = require("restify");
const setupVilleRoutes = require("./controllers/villes");

function setupServer() {
  const server = restify.createServer({ name: "API hook" });
  setupVilleRoutes(server);

  server.get("/", getHome);

  server.pre(restify.plugins.pre.dedupeSlashes());
  server.pre(restify.plugins.pre.sanitizePath());
  server.pre(restify.plugins.pre.strictQueryParams());
  server.pre(restify.plugins.pre.userAgentConnection());

  server.use(restify.plugins.queryParser({ mapParams: false }));
  server.use(restify.plugins.jsonBodyParser());

  function getHome(req, res, next) {
    res.send("home test ok");
    next;
  }
  return server;
}

module.exports = setupServer;
