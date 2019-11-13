const router = require("./index");

const superBowlController = require("../controllers/superBowlController");

router.get("/superbowls", superBowlController.index);
router.post("/superbowls", superBowlController.create);
router.put("/superbowls/:id", superBowlController.edit);
router.delete("/superbowls/:id", superBowlController.delete);
