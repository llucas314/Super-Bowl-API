const express = require("express");
const router = express.Router();

const halftimeController = require("../controllers/HalftimeContoller");
//TODO: add redirect
router.get("/halftimes", halftimeController.showHalftimes);
// router.get("/halftimes/query", halftimeController.showHalftimeByArtist);
router.get("/halftimes/:bowlNumber", halftimeController.showHalftimeId);

module.exports = router;
