const JWT = require(`jsonwebtoken`);
const { jwtSecret } = require(`../config/secrets`);

exports.getLoginToken = user => JWT.sign(user, jwtSecret, {});
