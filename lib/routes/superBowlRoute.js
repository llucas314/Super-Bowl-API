const express = require("express");
const router = express.Router();

const superBowlController = require("../controllers/superBowlController.js");

router.get("/superbowls", superBowlController.index);
router.get("/superbowls/:id", superBowlController.showSuperBowl);
router.post("/superbowls", superBowlController.create);
router.put("/superbowls/:id", superBowlController.edit);
router.delete("/superbowls/:id", superBowlController.delete);

module.exports = router;
