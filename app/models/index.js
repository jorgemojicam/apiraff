const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.role = require("./role.model");
db.auth = require("./auth.model");
db.ROLES = ["user", "admin", "moderator"];
module.exports = db;