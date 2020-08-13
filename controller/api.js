const { validationResult } = require("express-validator");
var ytdl = require("ytdl-core");

function youtdl(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let idVideo = req.query.video;

  if (!ytdl.validateID(idVideo)) idVideo = ytdl.getURLVideoID(idVideo);

  const { vd_format, vd_quality, vd_type } = req.query;

  if (vd_type == "attach") {
    res.header("Content-Type", `video/${vd_format}`);
  } else {
    res.header(
      "Content-Disposition",
      `attachment; filename="${idVideo}.${vd_format}"`
    );
  }

  ytdl(idVideo, {
    filter: (format) => format.container === vd_format,
    quality: vd_quality,
  }).pipe(res);
}

function youtdlCheck(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  ytdl.getBasicInfo(req.query.video).then((info) => {
    res.send(info.videoDetails);
  });
}

module.exports = {
  youtdl,
  youtdlCheck,
};
