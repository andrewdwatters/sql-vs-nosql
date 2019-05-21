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

module.exports = {
  missingRequiredField,
  missingDBSource,
  genericError
}
