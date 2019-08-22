const mongoose = require("mongoose");
const chalk = require("chalk");

const url = "mongodb://192.168.99.100:27017/studio";
// const url = "mongodb://192.168.99.100:27017/villes";
// const url = "mongodb://localhost/villes";

const options = {
	connectTimeoutMS: 5000,
	reconnectInterval: 100,
	useCreateIndex: true,
	useNewUrlParser: true
};

mongoose.connect(url, options);
const db = mongoose.connection;

db.on("open", () => console.log(chalk`{green Mongo connection opened}`));
db.on("error", () => console.log(chalk`{red Mongo connection issue}`));

module.exports = db;
