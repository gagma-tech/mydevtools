var express = require("express");
var router = express.Router();
var ControlllerIndex = require("../controller/index");
var ytdl = require("ytdl-core");
const { body, query, param } = require("express-validator");

/* GET home page. */
router.get("/", ControlllerIndex.home);


module.exports = router;
