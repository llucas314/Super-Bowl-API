const express = require("express");
const router = express.Router();

const superBowlController = require("../controllers/superBowlController.js");

router.get("/superbowls", superBowlController.index);
router.get("/superbowls/:gameNumber", superBowlController.showSuperBowl);
router.post("/superbowls", superBowlController.create);
router.put("/superbowls/:gameNumber", superBowlController.edit);
router.delete("/superbowls/:gameNumber", superBowlController.delete);

module.exports = router;
