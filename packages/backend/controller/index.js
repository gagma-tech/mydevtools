const { validationResult } = require("express-validator");
var ytdl = require("ytdl-core");

function home(req, res, next) {
  res.render("index", { title: "Express" });
}

module.exports = {
  home,
};
