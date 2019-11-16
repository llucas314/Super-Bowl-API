const mongoose = require("../db/connection");
const Schema = mongoose.Schema;
const halftimePerformerSchema = require("./HalftimePerformer").schema;
const viewershipSchema = require("./Viewership").schema;
const teamSchema = new Schema({
  teamName: {
    type: String,
    trim: true
  },
  winner: Boolean,
  logo: String
});
const superBowlSchema = new Schema({
  date: {
    type: String,
    trim: true,
    required: true
  },
  super_bowl: {
    type: Number,
    required: true
  },
  venue: {
    type: String,
    trim: true,
    required: true
  },
  city: {
    type: String,
    trim: true,
    required: true
  },
  state: {
    type: String,
    trim: true,
    required: true
  },
  attendance: {
    type: Number
  },
  winning_pts: Number,
  qb_winner: [
    {
      type: String,
      trim: true
    }
  ],

  coach_winner: {
    type: String,
    trim: true
  },
  teams: [teamSchema],
  losing_pts: Number,
  qb_loser: [
    {
      type: String,
      trim: true
    }
  ],
  coach_loser: {
    type: String,
    trim: true
  },
  combined_pts: Number,
  difference_pts: Number,
  halftimePerformer: [halftimePerformerSchema],
  viewer: viewershipSchema
});

module.exports = mongoose.model("SuperBowl", superBowlSchema);
