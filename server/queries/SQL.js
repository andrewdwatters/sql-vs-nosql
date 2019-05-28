const { getQuery } = require("../util/index.js");
const connection = require("../databases/sql/index");

module.exports = {
  "/getUserById": id => {
    const query = getQuery("get_user_by_id");
    console.log(query);
    connection.query(query, (error, results, fields) => {
      // sqlMessage: 'No database selected',
      if (error) console.log(error);
      console.log("RESULTS: ", results);
      console.log("FIELDS: ", fields);
    });

    return query;
  }
};
