const express = require("express");
const router = express.Router();

const superBowlController = require("../controllers/superBowlController.js");

router.get("/superbowls", superBowlController.index);
router.get("/superbowls/halftimes", superBowlController.showHalftimes);
router.get(
  "/superbowls/halftimes/:bowlNumber",
  superBowlController.showHalftimeId
);
router.get("/superbowls/:id", superBowlController.showSuperBowl);
router.post("/superbowls", superBowlController.create);
router.put("/superbowls/:id", superBowlController.edit);
router.delete("/superbowls/:id", superBowlController.delete);

module.exports = router;
