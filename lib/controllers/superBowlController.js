const SuperBowl = require("../models/SuperBowl");

module.exports = {
  index: (req, res) => {
    SuperBowl.find({})
      .then(superbowl => {
        const superbowlMapped = superbowl.map(superbowl => {
          const superbowlObject = {
            _id: superbowl._id,
            super_bowl: superbowl.super_bowl,
            teams: superbowl.teams,
            venue: superbowl.venue,
            city: superbowl.city,
            state: superbowl.state
          };
          return superbowlObject;
        });
        res.json(superbowlMapped);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  showSuperBowl: (req, res) => {
    SuperBowl.findOne({ _id: req.params.id })
      .then(superbowl => {
        res.json(superbowl);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  create: (req, res) => {
    SuperBowl.create(req.body)
      .then(superbowl => {
        res.json(superbowl);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  edit: (req, res) => {
    SuperBowl.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true
    })
      .then(superbowl => {
        res.json(superbowl);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  delete: (req, res) => {
    SuperBowl.findOneAndRemove({ _id: req.params.id })
      .then(superbowl => {
        res.json(superbowl);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  showHalftimes: (req, res) => {
    SuperBowl.find({})
      .then(superbowl => {
        const superbowlMapped = superbowl.map(superbowl => {
          const superbowlObject = {
            halftimePerformers: superbowl.halftimePerformer
          };
          return superbowlObject;
        });
        res.json(superbowlMapped);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  showHalftimeId: (req, res) => {
    SuperBowl.findOne({ super_bowl: req.params.bowlNumber })
      .then(superbowl => {
        const superbowlObject = {
          halftimePerformers: superbowl.halftimePerformer
        };
        res.json(superbowlObject);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  },
  getState: (req, res) => {
    SuperBowl.find({ state: req.query.state })
      .then(superbowl => {
        res.json(superbowl);
      })
      .catch(err => {
        res.status(405);
        res.send("Invalid input", err);
      });
  }
};
