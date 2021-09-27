require("dotenv").config();

module.exports = require("mongoose").connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
});
