function checkValidateYtl(link) {
  var p = /^(?:https?:\/\/)?(?:www|m\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  return link.match(p) ? RegExp.$1 : false;
}

module.exports = { checkValidateYtl };
