const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const viewershipSchema = new Schema({
  super_bowl: Number,
  network: {
    type: String,
    trim: true
  },
  avg_us_viewers: Number,
  total_us_viewers: Number,
  rating_household: Number,
  ad_cost: Number
});

module.exports = mongoose.model("Viewer", viewershipSchema);
