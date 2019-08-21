const mongoose = require("mongoose");
const connection = require("./connection");

const villeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hab: { type: Number, min: 0 }
});

villeSchema.statics.search = search;

const Ville = connection.model("Ville", villeSchema);

async function search() {
  const data = await this.find({}, { name: 1 }, { sort: { name: 1 } });
  return data.length > 0 ? data : "no ville yet";
}

module.exports = Ville;

/*
const mongoose = require("mongoose");
const db = require("../db/connection");

const villesSchema = new mongoose.Schema({
  name: String
});

villesSchema.statics.search = search;

async function search(letter = "") {
  let data;
  if (letter) {
    data = await this.find(
      { name: { $regex: `^${letter}.+`, $options: "i" } },
      { name: 1 },
      { sort: { name: 1 } }
    );
    return data;
  }
  data = await this.find({}, { name: 1 }, { sort: { name: 1 } });
  return data;
}

const Villes = db.model("Villes", villesSchema);

module.exports = Villes;
*/
