const mongoose = require("mongoose");
const connection = require("./connection");

const villeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  hab: { type: Number, min: 0 }
});

villeSchema.statics.search = search;

const Ville = connection.model("Ville", villeSchema);

function search() {
  return "plein de villes";
  /*const data = await this.find({}, { name: 1 }, { sort: { name: 1 } });
  return data.length > 0 ? data : "no ville yet";*/
}

module.export = Ville;
