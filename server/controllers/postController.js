const express = require("express");
const { Posts } = require("../databases/nosql/models");
const router = express.Router();

// postController
router.post("/createPost", (req, res) => {
  const { author, content } = req.body;
  if (!author || !content) {
    res.status(500).send({
      message: "Missing at least one required field",
      data: {}
    });
  }
  try {
    Posts.create(
      {
        userRef: author,
        content,
        timestamp: new Date().toString()
      },
      (err, doc) => {
        if (err) {
          console.log("Error creating post: ", err);
          res.status(500).send({
            message: "Error creating post: " + String(err),
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

router.get("/getPostById", (req, res) => {
  //   if (!req.query.id)
  //     res.status(500).send({
  //       message: "id is required",
  //       data: {}
  //     });
  //   const { id } = req.query;
  //   try {
  //     Posts.findById(id, (err, doc) => {
  //       if (err) {
  //         res.status(404).send({
  //           message: "Error: " + String(err),
  //           data: {}
  //         });
  //       } else {
  //         res.status(200).send({
  //           message: `Successfully found document with id: ${doc._id}`,
  //           data: doc
  //         });
  //       }
  //     });
  //   } catch (err) {
  //     res.status(500).send({
  //       message: "Unknown error: " + String(err),
  //       data: {}
  //     });
  //   }
});

router.delete("/deletePostById", (req, res) => {
  if (!req.query.id)
    res.status(500).send({
      message: "id is required",
      data: {}
    });
  const { id } = req.query;
  try {
    Posts.findByIdAndDelete(id, (err, doc) => {
      if (err) {
        console.log("Error deleting post: ", err);
        res.status(500).send({
          message: "Error deleting post: " + String(err),
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
});

router.get("/getPostsByUser", (req, res) => {
  console.log(req.query.userId);
});

router.delete("/deletePostsByUser", (req, res) => {
  console.log(req.query.userId);
});

module.exports = router;
