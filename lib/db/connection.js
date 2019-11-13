const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/super_bowls",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  console.log("Connected")
);

module.exports = mongoose;
