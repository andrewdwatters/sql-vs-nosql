const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  avitar: String
});

const PostSchema = new mongoose.Schema({
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  content: String,
  timestamp: String,
});

const CommentSchema = new mongoose.Schema({
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  postRef: {type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
  content: String,
  timestamp: String,
});

const ReactionSchema = new mongoose.Schema({
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  postRef: {type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
  type: String,
  timestamp: String,
});

const Users = mongoose.model("Users", UserSchema);
const Posts = mongoose.model("Posts", PostSchema);
const Comments = mongoose.model("Comments", CommentSchema);
const Reactions = mongoose.model("Reactions", ReactionSchema);

module.exports = { Users, Posts, Comments, Reactions };