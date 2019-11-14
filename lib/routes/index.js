const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/superbowls");
});
router.use(require("./superBowlRoute"));
router.use(require("./halftimeRoute"));
module.exports = router;
