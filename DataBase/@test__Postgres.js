const createConnectionPool = require("@databases/pg");

const Connect = () => {
  const postgres = createConnectionPool();
  return postgres;
};

const queryPostgres = async (postgres, queryString, returnResult) => {
  let queryStatus = "pending...";
  try {
    let results = await postgres.query(queryString);
    queryStatus = "success";
    returnResult(results[0], queryStatus);
  } catch (error) {
    queryStatus = "error";
    returnResult("error", queryStatus);
  }
};

module.exports = {
  Connect,
  queryPostgres,
};
