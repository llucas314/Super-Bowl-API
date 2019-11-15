const express = require("express");
const router = express.Router();

const halftimeController = require("../controllers/HalftimeContoller");

router.get("/halftime", function(req, res) {
  res.redirect("/halftimes");
});
router.get("/halftimes", halftimeController.showHalftimes);
router.get("/halftimes/:bowlNumber", halftimeController.showHalftimeId);

module.exports = router;
