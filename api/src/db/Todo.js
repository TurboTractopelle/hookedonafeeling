const mongoose = require("mongoose");
const connection = require("./connection");

const todoSchema = new mongoose.Schema({
	name: { type: String, required: true },
	status: { type: Boolean, default: false }
});

todoSchema.statics.search = search;
todoSchema.statics.dump = dump;

const Todo = connection.model("Todo", todoSchema);

async function search() {
	const data = await this.find({}, {}, { sort: { name: 1 } });
	return data;
}

async function dump() {
	await this.collection.drop();
	return "done";
}

module.exports = Todo;
