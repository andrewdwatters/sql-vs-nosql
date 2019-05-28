const mysql = require("mysql");

let connection = mysql.createConnection({
  host: process.env.CLOUD_SQL_HOST_IP,
  user: "root",
  password: process.env.CLOUD_SQL_CONNECTION_PASSWORD
});

connection.connect(function(err) {
  if (err) throw err;
  else console.log("mySQL database connected!");
});

// connection.query('use DB', (err, results, fields) => {

// })

module.exports = connection;
