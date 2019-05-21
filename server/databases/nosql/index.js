const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://andrewdwatters1:${
    process.env.MONGO_CONNECTION_PASSWORD
  }@primary-cluster-capyd.mongodb.net/test?retryWrites=true`,
  { useNewUrlParser: true },
  function(err) {
    if (err) throw err;
    else console.log("Mongo database connected!");
  }
);

module.exports = mongoose;
