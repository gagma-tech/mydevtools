var express = require("express");
var router = express.Router();
var ControlllerIndex = require("../controller/index");
var ytdl = require("ytdl-core");

/* GET home page. */
router.get("/", ControlllerIndex.home);


module.exports = router;
