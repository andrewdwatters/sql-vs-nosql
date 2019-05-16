const express = require("express");
const { Reactions } = require("../../databases/nosql/models");
const router = express.Router();

// reactionController
router.post("/createReaction", (req, res) => {
  const { post, author, type } = req.body;
  if (!post || !author || !type) {
    res.status(500).send({
      message: "Missing at least one required field",
      data: {}
    });
  }
  try {
    Reactions.create(
      {
        userRef: author,
        postRef: post,
        type,
        timestamp: new Date().toString()
      },
      (err, doc) => {
        if (err) {
          console.log("Error creating comment: ", err);
          res.status(500).send({
            message: "Error creating comment" + String(err),
            data: {}
          });
        } else {
          console.log("Successfully created document: ", doc);
          res.status(200).send({
            message: `Successfully created document with id: ${doc._id}`,
            data: doc
          });
        }
      }
    );
  } catch (err) {
    res.status(500).send({
      message: "Unknown error: " + String(err),
      data: {}
    });
  }
});

router.get("/getReactionById", (req, res) => {
  if (!req.query.id)
    res.status(500).send({
      message: "id is required",
      data: {}
    });
  const { id } = req.query;
  try {
    Reactions.findById(id, (err, doc) => {
      if (err) {
        console.log("Error finding reaction: ", err);
        res.status(500).send({
          message: "Error finding reaction: " + String(err),
          data: {}
        });
      } else {
        console.log("Successfully found document: ", doc);
        res.status(200).send({
          message: `Successfully found document with id: ${doc._id}`,
          data: doc
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Unknown error: " + String(err),
      data: {}
    });
  }
});

router.delete("/deleteReactionById", (req, res) => {
  if (!req.query.id)
  res.status(500).send({
    message: "id is required",
    data: {}
  });
  const { id } = req.query;
  try {
    Reactions.findByIdAndDelete(id, (err, doc) => {
      if (err) {
        console.log("Error deleting reaction: ", err);
        res.status(500).send({
          message: "Error deleting reaction: " + String(err),
          data: {}
        });
      } else {
        console.log("Successfully deleted document: ", doc);
        res.status(200).send({
          message: `Successfully deleted document with id: ${doc._id}`,
          data: doc
        });
      }
    });
  } catch (err) {
    res.status(500).send({
      message: "Unknown error: " + String(err),
      data: {}
    });
  }
})

// router.delete("/deleteReactionsByUser", req.query.id)

module.exports = router;
