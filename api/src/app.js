const restify = require("restify");
const setupTodosRoutes = require("./controllers/todos");
const corsMiddleware = require("restify-cors-middleware");

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

function setupServer() {
  const server = restify.createServer({ name: "API hook" });
  setupTodosRoutes(server);

  server.pre(restify.plugins.pre.dedupeSlashes());
  server.pre(restify.plugins.pre.sanitizePath());
  server.pre(restify.plugins.pre.strictQueryParams());
  server.pre(restify.plugins.pre.userAgentConnection());

  server.use(restify.plugins.queryParser({ mapParams: false }));
  server.use(restify.plugins.jsonBodyParser());

  server.pre(cors.preflight);
  server.use(cors.actual);

  return server;
}

module.exports = setupServer;
