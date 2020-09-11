"use strict";

const express = require("express"),
  router = express.Router(),
  authMiddleware = require("../middleware/authMiddleware");

//common APIs controller
const _commonController = require("../controllers/controller");
const commonController = new _commonController();


router.get("/get-tweets", authMiddleware.anonymousAuthorize, commonController.getTweets);
router.post("/login", authMiddleware.anonymousAuthorize, commonController.login);
router.get("/get-graph-data", authMiddleware.anonymousAuthorize, commonController.getGraphData);

module.exports = router;



