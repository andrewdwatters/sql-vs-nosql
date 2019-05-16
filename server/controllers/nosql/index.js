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

module.exports = router;
