const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const noSqlController = require("./controllers/nosql/index");
const sqlController = require("./controllers/sql/index");

const port = process.env.SERVER_PORT;
const noSQLdb = require("./databases/nosql");
const SQLdb = require("./databases/sql");

const app = express();
app.use(bodyParser.json());

app.use("/noSql", noSqlController);
// app.use("/sql", sqlController);
// app.use('/both', null)

app.listen(port, () => console.log(`Backend running on port: ${port}`));

// https://cloud.mongodb.com/v2/5cdc5509014b76dfdbcd8895#metrics/replicaSet/5cdc81439ccf64754b16a942/explorer/test/users/find