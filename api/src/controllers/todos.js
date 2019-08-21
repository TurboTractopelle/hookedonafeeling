const Todo = require("../db/Todo");

function setupTodosRoutes(server) {
  server.get("/", getHome);
  server.get("/todos", getTodos);
  server.post("/todos", postTodos);
  server.post("/dump", dbDump);
}

function getHome(req, res, next) {
  res.send("Api works on '/'");
  next();
}

async function getTodos(req, res, next) {
  try {
    const todos = await Todo.search();
    res.send(todos);
    next();
  } catch (error) {
    console.log("error getTodos");
    res.send(error);
    next();
  }
}

async function postTodos(req, res, next) {
  try {
    await req.body.forEach(async o => {
      await Todo.create(o);
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
    await Todo.dump();
    res.send("DB dumped");
  } catch (error) {
    res.send(error);
    next();
  }
}

module.exports = setupTodosRoutes;
