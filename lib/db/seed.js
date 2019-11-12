const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/super_bowls",
  {
    useNewUrlParser: true
  },
  console.log("Connected")
);

module.exports = mongoose;
