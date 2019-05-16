const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  `mongodb+srv://andrewdwatters1:${
    process.env.MONGO_CONNECTION_PASSWORD
  }@primary-cluster-capyd.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true },
  function(err) {
    if (err) throw err;
    console.log("Mongo database connected");
  }
);

module.exports = mongoose;
