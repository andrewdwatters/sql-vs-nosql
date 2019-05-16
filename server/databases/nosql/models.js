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

// import mongoose from 'mongoose'

// const UserSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String,
//   email: String,
//   password: String
// });

// export default mongoose.model('User', UserSchema);

// import mongoose from "mongoose";

// const LibrarySchema = new mongoose.Schema({
//   title: String,
//   author: String,
//   numPages: Number,
//   pubDate: Date,
//   cover: String,
//   synopsis: String,
//   userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
//   // 2. Add user collection and create relationship on UID
// });

// export default mongoose.model("Library", LibrarySchema);
