const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/superbowl");
});
router.use(require("./superBowlRoute"));

module.exports = router;
