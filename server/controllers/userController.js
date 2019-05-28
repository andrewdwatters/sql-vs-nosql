const express = require("express");

const router = express.Router();
const {
  missingRequiredField,
  missingDBSource,
  genericError
} = require("../util/index.js");

const queries = require("../queries/index.js");

router.get("/getUserById", (req, res) => {
  let { id, database } = req.query;
  if (!id) res.status(500).send(missingRequiredField());
  else if (!database) res.status(500).send(missingDBSource());

  try {
    const path =
      req.route.path ||
      req._parsedUrl.pathname.slice(0, req._parsedUrl.pathname.length - 1);

    database = database.toLowerCase();
    
    queries[database][path](id).then(doc => {
      if (doc) {
        res.status(200).send({
          message: "Success",
          data: doc
        });
      } else {
        res.status(404).send({
          message: "No user found",
          data: {}
        });
      }
    });
  } catch (err) {
    res.status(500).send(genericError(err));
  }
});

router.post("/createUser", (req, res) => {
  const { username, avitar } = req.body;
  let { database } = req.query;
  if (!username || !avitar) res.status(500).send(missingRequiredField());
  else if (!database) res.status(500).send(missingDBSource());
  try {
    const path =
      req.route.path ||
      req._parsedUrl.pathname.slice(0, req._parsedUrl.pathname.length - 1);

    database = database.toLowerCase();

    queries[database][path](req.body).then(doc => {
      res.status(200).send({
        message: "Success",
        data: doc
      });
    });
  } catch (err) {
    res.status(500).send(genericError(err));
  }
});

router.delete("/deleteUserById", (req, res) => {
  let { id, database } = req.query;
  if (!id) res.status(500).send(missingRequiredField());
  else if (!database) res.status(500).send(missingDBSource());

  try {
    const path =
      req.route.path ||
      req._parsedUrl.pathname.slice(0, req._parsedUrl.pathname.length - 1);

    database = database.toLowerCase();

    queries[database][path](id).then(doc => {
      res.status(200).send({
        message: "Success",
        data: doc
      });
    });
  } catch (err) {
    res.status(500).send(genericError(err));
  }
});

router.put("/editUser", (req, res) => {
  let { id, database } = req.query;
  if (!id) res.status(500).send(missingRequiredField());
  try {
    const path =
      req.route.path ||
      req._parsedUrl.pathname.slice(0, req._parsedUrl.pathname.length - 1);

    database = database.toLowerCase();

    queries[database][path](id, req.body).then(doc => {
      res.status(200).send({
        message: "Success",
        data: doc
      });
    });
  } catch (err) {
    res.status(500).send(genericError(err));
  }
});

module.exports = router;
