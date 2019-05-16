const express = require("express");
const { Users } = require("../../databases/nosql/models");
const router = express.Router();

// userController
router.post("/createUser", (req, res) => {
  const { username, avitar } = req.body;
  if (!username || !avitar)
    res.status(500).send({
      message: "Username and avitar are required",
      data: {}
    });
  try {
    Users.create(
      {
        username,
        avitar,
        timestamp: new Date().toString()
      },
      (err, doc) => {
        if (err) {
          console.log("Error creating user: ", err);
          res.status(500).send({
            message: "Error creating user: " + String(err),
            data: {}
          });
        } else {
          console.log("Successfully created document: ", doc); // 
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

router.get("/getUserById", (req, res) => {
  if (!req.query.id)
    res.status(500).send({
      message: "id is required",
      data: {}
    });
  const { id } = req.query;
  try {
    Users.findById(id, (err, doc) => {
      if (err) {
        console.log("Error finding user: ", err);
        res.status(500).send({
          message: "Error finding user: " + String(err),
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

router.delete("/deleteUserById", (req, res) => {
  if (!req.query.id)
  res.status(500).send({
    message: "id is required",
    data: {}
  });
  const { id } = req.query;
  try {
    Users.findByIdAndDelete(id, (err, doc) => {
      if (err) {
        console.log("Error deleting user: ", err);
        res.status(500).send({
          message: "Error deleting user: " + String(err),
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
