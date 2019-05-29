CREATE DATABASE IF NOT EXISTS main;
USE main;

CREATE TABLE IF NOT EXISTS users (
  _id PRIMARY KEY NOT NULL,
  username VARCHAR(50),
  avitar VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS posts (
  _id PRIMARY KEY NOT NULL,
  userRef VARCHAR(24) NOT NULL,
  FOREIGN KEY (userRef) REFERENCES users (_id)
  content VARCHAR(200),
  timestamp VARCHAR(200)
);



-- city_id INT NOT NULL,
--  FOREIGN KEY (city_id) REFERENCES cities (id)


-- const mongoose = require("mongoose");

-- const UserSchema = new mongoose.Schema({
--   username: String,
--   avitar: String
-- });

-- const PostSchema = new mongoose.Schema({
--   userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
--   content: String,
--   timestamp: String,
-- });

-- const CommentSchema = new mongoose.Schema({
--   userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
--   postRef: {type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
--   content: String,
--   timestamp: String,
-- });

-- const ReactionSchema = new mongoose.Schema({
--   userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
--   postRef: {type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
--   type: String,
--   timestamp: String,
-- });

-- const Users = mongoose.model("Users", UserSchema);
-- const Posts = mongoose.model("Posts", PostSchema);
-- const Comments = mongoose.model("Comments", CommentSchema);
-- const Reactions = mongoose.model("Reactions", ReactionSchema);

-- module.exports = { Users, Posts, Comments, Reactions };