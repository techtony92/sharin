import nextConnect from "next-connect";
import { onError, onNoMatch } from "util/nextConnectOptions";
import { queryPostgres } from "DataBase/postgres";
import { sql } from "@databases/pg";
export const config = {
  api: {
    bodyParser: true,
  },
};

const nextDirector = nextConnect({ onNoMatch, onError, attachParams: true });

nextDirector.get((req, res) => {
  let postgres = Connect();
  queryPostgres(postgres, sql`SELECT * FROM posts`, (result) => {
    console.log({ result });
    queryPostgres(
      postgres,
      sql`SELECT email FROM users WHERE id=${result.post_owner}`,
      (result) => {
        console.log({ result });
        postgres.dispose();
        res.send(result);
      }
    );
  });
});
