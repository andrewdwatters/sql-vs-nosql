const { formatQuery } = require("../util/index.js");
const connection = require("../databases/sql/index");

module.exports = {
  "/getUserById": id => {
    const query = formatQuery("get_user_by_id", id);
    console.log(query);
    connection.query(query, (error, results, fields) => {
      if (error) console.log("ERROR: ", error);
      console.log("RESULTS: ", results);
      console.log("FIELDS: ", fields);
    });

    // return query;
  }
};
