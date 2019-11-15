const express = require("express");
const router = express.Router();

const superBowlController = require("../controllers/superBowlController.js");

router.get("/superbowls", superBowlController.index);
router.post("/superbowls", superBowlController.create);
router.get("/superbowls/search", superBowlController.getState);
router.get("/superbowls/:id", superBowlController.showSuperBowl);
router.put("/superbowls/:id", superBowlController.edit);
router.delete("/superbowls/:id", superBowlController.delete);

module.exports = router;
