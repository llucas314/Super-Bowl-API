const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const halftimePerformerSchema = new Schema({
  musician: {
    type: String,
    trim: true
  },
  num_songs: Number
});

module.exports = mongoose.model("HalftimePerformer", halftimePerformerSchema);
