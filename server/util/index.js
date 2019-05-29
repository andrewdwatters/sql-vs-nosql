const fs = require("fs");
const ObjectID = require("mongodb").ObjectID;

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

function formatQuery(query, ...args) {
  const root = process.cwd();
  const pathToQueriesRoot = root + "/server/queries/sql/";
  const pathToQuery = pathToQueriesRoot + query.toLowerCase() + ".sql";
  const queryAtPath = fs.readFileSync(pathToQuery, "utf8");
  const queryWords = queryAtPath.split(" ");
  for (let i = 0; i < queryWords.length; i++) {

    // replaces spaces, tabs, newlines with empty spaces
    queryWords[i] = queryWords[i].replace(/[\r|\n\ \  ]+/, "");
    
    // replaces $1, $2... vars with arguments given
    queryWords[i] = queryWords[i].replace(/^\$[0-9]+/, [...args].shift());
    
    // replaces _id with MongoDB ObjectID to map SQL id's to Mongo ObjectID's
    // queryWords[i] = queryWords[i].replace(/^_id PRIMARY KEY,$/, `_id PRIMARY KEY ${ObjectID()}`);
  }

  return queryWords.join(' ');
}

module.exports = {
  missingRequiredField,
  missingDBSource,
  genericError,
  formatQuery
};
