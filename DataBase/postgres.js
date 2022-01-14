import createConnectionPool from "@databases/pg";
export const Connect = () => {
  const postgres = createConnectionPool();
  return postgres;
};

export const queryPostgres = async (postgres, queryString, returnResult) => {
  let results = await postgres.query(queryString);
  returnResult(results[0]);
};
