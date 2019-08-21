const restify = require("restify");
const setupVilleRoutes = require("./controllers/villes");
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

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

  server.pre(cors.preflight);
  server.use(cors.actual);

  function getHome(req, res, next) {
    res.send("home test ok");
    next;
  }
  return server;
}

module.exports = setupServer;
