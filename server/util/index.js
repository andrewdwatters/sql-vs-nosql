const fs = require("fs");

function missingRequiredField() {
  return {
    message: "Error: Missing one or more required fields",
    data: {}
  };
}

function missingDBSource() {
  return {
    message:
      'Missing database source. Pass a key of "database" with a value of "sql" or "nosql" as the value via the request query',
    data: {}
  };
}

function genericError(err) {
  return {
    message: "Error: " + String(err),
    data: {}
  };
}

function getQuery(query) {
  const root = process.cwd();
  const sqlQueriesPath = root + "/server/queries/sql/";
  const pathToQuery = sqlQueriesPath + query.toLowerCase() + ".sql"
  const queryAtPath = fs.readFileSync(pathToQuery, "utf8");
  return queryAtPath;
}

module.exports = {
  missingRequiredField,
  missingDBSource,
  genericError,
  getQuery
};
