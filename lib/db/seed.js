const superBowlsJson = require("./json/superbowls.json");
const halftimesJson = require("./json/halftime_musicians.json");
const viewersJson = require("./json/tv_info.json");
const SuperBowl = require("../models/SuperBowl");
const HalftimePerformer = require("../models/HalftimePerformer");
const Viewership = require("../models/Viewership");

const superBowlsData = superBowlsJson.map(superBowlJson => {
  const superBowl = {
    date: superBowlJson.date,
    super_bowl: superBowlJson.super_bowl,
    venue: superBowlJson.venue,
    city: superBowlJson.SuperBowl,
    state: superBowlJson.state,
    attendance: superBowlJson.attendance,
    team_winner: superBowlJson.team_winner,
    winning_pts: superBowlJson.winning_pts,
    qb_winner: [superBowlJson.qb_winner_1, superBowlJson.qb_winner_2],
    coach_winner: superBowlJson.coach_winner,
    team_loser: superBowlJson.team_loser,
    losing_pts: superBowlJson.losing_pts,
    qb_loser: [superBowlJson.qb_loser_1, superBowlJson.qb_loser_2],
    coach_loser: superBowlJson.coach_loser,
    combined_pts: superBowlJson.combined_pts,
    difference_pts: superBowlJson.difference_pts
  };
  return superBowl;
});

SuperBowl.remove({}).then(() => {
  SuperBowl.create(superBowlsData)
    .then(superBowl => {
      console.log(superBowl);
    })
    .catch(err => console.log(err));
});

const halftimesData = halftimesJson.map(musician => {
  const halftime = {
    super_bowl: halftime.super_bowl,
    musician: halftime.musician,
    num_songs: halftime.num_songs
  };
  return halftime;
});

HalftimePerformer.remove({}).then(() => {
  HalftimePerformer.create(halftimesData)
    .then(halftime => {
      console.log(halftime);
    })
    .catch(err => console.log(err));
});

const viewersData = viewersJson.map(viewInfo => {
  const view = {
    super_bowl: viewInfo.super_bowl,
    network: viewInfo.network,
    avg_us_viewers: viewInfo.avg_us_viewers,
    total_us_viewers: viewInfo.total_us_viewers,
    rating_household: viewInfo.rating_household,
    ad_cost: viewInfo.ad_cost
  };
  return view;
});

Viewership.remove({}).then(() => {
  Viewership.create(viewersData)
    .then(view => {
      console.log(view);
    })
    .catch(err => console.log(err));
});
