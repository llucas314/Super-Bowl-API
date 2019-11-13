const SuperBowl = require("../models/SuperBowl");

module.exports = {
  index: (req, res) => {
    SuperBowl.find({}).then(superbowls => {
      res.json(superbowls);
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
  }
};
