const SuperBowl = require("../models/SuperBowl");

module.exports = {
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
  }
};
