const mongoose = require("mongoose");
const chalk = require("chalk");

const url = "mongodb://192.168.99.100/27017";

const connection = mongoose.createConnection(url, {
  connectTimeoutMS: 5000,
  reconnectInterval: 100,
  useNewUrlParser: true
});

connection.on("open", () =>
  console.log(chalk`{green Mongo connection opened}`)
);
connection.on("error", () => console.log(chalk`{red Mongo connection issue}`));

module.exports = connection;
