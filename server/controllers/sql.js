const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
  console.log(req.body);
  res.status(200).send('hit')
})

module.exports = router;