const chalk = require("chalk");
const setupServer = require("./app");
const PORT = 4000;
const server = setupServer();
const connection = require("./db/connection");

console.log(chalk`{white Waiting for mongo connection}`);

connection.on("open", () => {
  console.log(chalk`{green loading server}`);
  server.listen(PORT, () => {
    console.log(chalk`{green Listening on port ${PORT}}`);
  });
});
