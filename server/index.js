const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const port = process.env.SERVER_PORT;
const noSQLDB = require('./databases/nosql/index');
const SQLDB = require('./databases/sql/index');

const userController = require('.//controllers/userController')
const postController = require('.//controllers/postController')
const commentController = require('.//controllers/commentController')
const reactionController = require('.//controllers/reactionController')

// add router.all("*", logBeforeTimestamp)

app.use("/users", userController);
app.use("/posts", postController);
app.use("/comments", commentController);
app.use("/reactions", reactionController);


app.listen(port, () => console.log(`Backend running on port: ${port}`));

// https://cloud.mongodb.com/v2/5cdc5509014b76dfdbcd8895#metrics/replicaSet/5cdc81439ccf64754b16a942/explorer/test/users/find