const mysql = require("mysql");
const { formatQuery } = require("../../util/index");

let connection = mysql.createConnection({
  host: process.env.CLOUD_SQL_HOST_IP,
  user: "root",
  password: process.env.CLOUD_SQL_CONNECTION_PASSWORD
});

connection.connect(function(err) {
  if (err) throw err;
  else console.log("mySQL database connected!");
});
const initQuery = formatQuery("init");
console.log("init query", initQuery);
// connection.query("use main", (err, results, fields) => {
//   if (err) console.log(err);
//   console.log("RESULTS: ", results);
//   console.log("FIELDS: ", fields);
// });

module.exports = connection;
