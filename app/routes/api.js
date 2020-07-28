var express = require("express");
var router = express.Router();
var ControlllerIndex = require("../controller/api");
var ytdl = require("ytdl-core");
const { body, query, param } = require("express-validator");

router.get(
  "/youtdl/",
  [
    query("video").custom((val) => {
      if (ytdl.validateID(val) || ytdl.validateURL(val)) return true;
      return Promise.reject("Invalid Youtube video");
    }),
    query("vd_format").isIn(["mp4", "webm"]),
    query("vd_quality").isIn([
      "highest",
      "lowestaudio",
      "lowest",
      "highestaudio",
      "highestvideo",
      "lowestvideo",
    ]),
  ],
  ControlllerIndex.youtdl
);

router.get(
  "/youtdl/check",
  [
    query("video").custom((val) => {
      if (ytdl.validateID(val) || ytdl.validateURL(val)) return true;
      return Promise.reject("Invalid Youtube video");
    }),
  ],
  ControlllerIndex.youtdlCheck
);

module.exports = router;
