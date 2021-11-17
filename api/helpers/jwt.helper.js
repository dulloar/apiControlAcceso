const { sign } = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/environments");

module.exports.generateToken = function(user) {
  return sign({ user }, JWT_SECRET, { expiresIn: "10h" });
};
