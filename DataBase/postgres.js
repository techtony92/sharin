import createConnectionPool from "@databases/pg";
export const Connect = () => {
  const postgres = createConnectionPool();
  return postgres;
};

export const queryPostgres = async (postgres, queryString, returnResult) => {
  let queryStatus = false;
  try {
    let results = await postgres.query(queryString);
    console.log(results);
    queryStatus = true;
    returnResult(results[0], queryStatus);
  } catch (error) {
    queryStatus = false;
    console.error(error);
    returnResult("error", queryStatus);
  }
};
