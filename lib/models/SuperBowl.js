const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const superBowlSchema = new Schema({
  name: String,
  year: Number,
  winner: String
});

module.exports = mongoose.model("SuperBowl", superBowlSchema);
