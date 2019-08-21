const Ville = require("../db/Ville");

function setupVillesRoutes(server) {
  server.get("/villes", getVilles);
  server.post("/villes", postVilles);
  server.post("/dump", dbDump);
}

async function getVilles(req, res, next) {
  try {
    const villes = await Ville.search();
    res.send(villes);
    next();
  } catch (error) {
    console.log("error getVilles");
    res.send(error);
    next();
  }
}

async function postVilles(req, res, next) {
  try {
    await req.body.forEach(async o => {
      await Ville.create(o);
    });
    res.send(201);
    next();
  } catch (error) {
    res.send(error);
    next();
  }
}

async function dbDump(req, res, next) {
  try {
    await Ville.dump();
    res.send("DB dumped");
  } catch (error) {
    res.send(error);
    next();
  }
}

module.exports = setupVillesRoutes;
