// const express = require("express");
// const db = require("../databases/nosql");
// const {
//   Users,
//   Posts,
//   Comments,
//   Reactions
// } = require("../databases/nosql/models");
// const router = express.Router();

// // add router.all("*", logBeforeTimestamp)

// // userController
// router.post("/createUser", (req, res) => {
//   const { username, avitar } = req.body;
//   try {
//     Users.create(
//       {
//         username,
//         avitar,
//         timestamp: new Date().toString()
//       },
//       (err, doc) => {
//         if (err) {
//           console.log("Error creating user: ", err);
//           res.status(500).send("Error creating user: ", err);
//         } else {
//           console.log("Successfully created document: ", doc);
//           res.status(200).send({
//             message: `Successfully created document with id: ${doc._id}`,
//             doc
//           });
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send("Unknown error: ", err);
//   }
// });

// // postController
// router.post("/createPost", (req, res) => {
//   const { author, content } = req.body;
//   try {
//     Posts.create(
//       {
//         userRef: author,
//         content,
//         timestamp: new Date().toString()
//       },
//       (err, doc) => {
//         if (err) {
//           console.log("Error creating post: ", err);
//           res.status(500).send("Error creating post: ", err);
//         } else {
//           console.log("Successfully created document: ", doc);
//           res.status(200).send({
//             message: `Successfully created document with id: ${doc._id}`,
//             doc
//           });
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send("Unknown error: ", err);
//   }
// });

// // commentController
// router.post("/createComment", (req, res) => {
//   const { post, author, content } = req.body;
//   try {
//     Comments.create(
//       {
//         userRef: author,
//         postRef: post,
//         content,
//         timestamp: new Date().toString()
//       },
//       (err, doc) => {
//         if (err) {
//           console.log("Error creating comment: ", err);
//           res.status(500).send("Error creating comment: ", err);
//         } else {
//           console.log("Successfully created document: ", doc);
//           res.status(200).send({
//             message: `Successfully created document with id: ${doc._id}`,
//             doc
//           });
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send("Unknown error: ", err);
//   }
// });

// // reactionController
// router.post("/createReaction", (req, res) => {
//   const { post, author, type } = req.body;
//   try {
//     Reactions.create(
//       {
//         userRef: author,
//         postRef: post,
//         type,
//         timestamp: new Date().toString()
//       },
//       (err, doc) => {
//         if (err) {
//           console.log("Error creating comment: ", err);
//           res.status(500).send("Error creating comment: ", err);
//         } else {
//           console.log("Successfully created document: ", doc);
//           res.status(200).send({
//             message: `Successfully created document with id: ${doc._id}`,
//             doc
//           });
//         }
//       }
//     );
//   } catch (err) {
//     res.status(500).send("Unknown error: ", err);
//   }
// });

// module.exports = router;
