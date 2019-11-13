const SuperBowl = require("../models/SuperBowl");

module.exports = {
  index: (req, res) => {
    SuperBowl.find({}).then(superbowl => {
      const superbowlMapped = superbowl.map(superbowl => {
        const superbowlObject = {
          _id: superbowl._id,
          super_bowl: superbowl.super_bowl,
          team_winner: superbowl.team_winner,
          team_loser: superbowl.team_loser,
          venue: superbowl.venue,
          city: superbowl.city,
          state: superbowl.state
        };
        return superbowlObject;
      });
      res.json(superbowlMapped);
    });
  },
  showSuperBowl: (req, res) => {
    SuperBowl.findOne({ _id: req.params.id }).then(superbowl => {
      res.json(superbowl);
    });
  },
  create: (req, res) => {
    SuperBowl.create(req.body).then(superbowl => {
      res.json(superbowl);
    });
  },
  edit: (req, res) => {
    SuperBowl.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    }).then(superbowl => {
      res.json(superbowl);
    });
  },
  delete: (req, res) => {
    SuperBowl.findOneAndRemove({ _id: req.params.id }).then(superbowl => {
      res.json(superbowl);
    });
  },
  showHalftimes: (req, res) => {
    SuperBowl.find({}).then(superbowl => {
      const superbowlMapped = superbowl.map(superbowl => {
        const superbowlObject = {
          halftimePerformer: superbowl.halftimePerformer
        };
        return superbowlObject;
      });
      res.json(superbowlMapped);
    });
  },
  showHalftimeId: (req, res) => {
    SuperBowl.findOne({ super_bowl: req.params.bowlNumber }).then(superbowl => {
      const superbowlObject = {
        halftimePerformer: superbowl.halftimePerformer
      };
      res.json(superbowlObject);
    });
  }
};
