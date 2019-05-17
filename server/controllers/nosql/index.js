const express = require("express");
const router = express.Router();

const userController = require("./userController");
const postController = require("./postController");
const commentController = require("./commentController");
const reactionController = require("./reactionController");

// add router.all("*", logBeforeTimestamp)

router.use("/users", userController);
router.use("/posts", postController);
router.use("/comments", commentController);
router.use("/reactions", reactionController);

// router.get("/getCommentsByUser", req.query.id)
// router.get("/getReactionsByUser", req.query.id)

// router.get("/getCommentsByPost", req.query.id)
// router.get("/deleteCommentsByPost");

// router.get("/getReactionsByPost")
// router.get("/deleteReactionsByPost")

// router.get("/getReactionsByComment")
// router.get("/deleteReactionsByComment")

// router.get("/getCommentsWhereTextIncludes")
// router.get("/getPostsWhereTextIncludes")
// router.get("/getReactionsWhereTextIncludes")

// router.get("/getCommentsWhereTextIncludes")
// router.get("/getPostsWhereTextIncludes")
// router.get("/getReactionsWhereTextIncludes")

module.exports = router;