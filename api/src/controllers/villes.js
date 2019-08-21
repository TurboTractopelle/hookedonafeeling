const Ville = require("../db/Ville");

function setupVillesRoutes(server) {
  server.get("/villes", getVilles);
  server.post("/villes", postVilles);
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
    await Ville.create({ name: "a", hab: 5 });
    res.send(201);
    next();
  } catch (error) {
    res.send(error);
    next();
  }
}

module.exports = setupVillesRoutes;
