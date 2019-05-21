const express = require("express");
const { Comments } = require("../databases/nosql/models");
const router = express.Router();

// commentController
router.post("/createComment", (req, res) => {
  const { post, author, content } = req.body;
  if (!post || !author || !content) {
    res.status(500).send({
      message: "Missing at least one required field",
      data: {}
    });
  }
  try {
    Comments.create(
      {
        userRef: author,
        postRef: post,
        content,
        timestamp: new Date().toString()
      },
      (err, doc) => {
        if (err) {
          console.log("Error creating comment: ", err);
          res.status(500).send({
            message: "Error creating comment: " + String(err),
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

router.get("/getCommentById", (req, res) => {
  if (!req.query.id)
    res.status(500).send({
      message: "id is required",
      data: {}
    });
  const { id } = req.query;
  try {
    Comments.findById(id, (err, doc) => {
      if (err) {
        console.log("Error finding comment: ", err);
        res.status(500).send({
          message: "Error finding comment: " + String(err),
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

router.delete("/deleteCommentById", (req, res) => {
  if (!req.query.id)
  res.status(500).send({
    message: "id is required",
    data: {}
  });
  const { id } = req.query;
  try {
    Comments.findByIdAndDelete(id, (err, doc) => {
      if (err) {
        console.log("Error deleting comment: ", err);
        res.status(500).send({
          message: "Error deleting comment: " + String(err),
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


module.exports = router;
