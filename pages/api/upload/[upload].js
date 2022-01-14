import nextConnect from "next-connect";
import API_GATE__AUTHENTICATION from "middleware/authentication";
import API_GATE__LOGGER from "middleware/logger";
import { Connect, queryPostgres } from "DataBase/postgres";
import { onError, onNoMatch } from "util/nextConnectOptions";
import { cloudinaryUpload } from "../../../serverUtil/cloudinary";
import { base64_To_ImageBuffer } from "../../../serverUtil/URI_To_Buffer";
import { writeToFileSystem } from "serverUtil/writeToFileSystem";
import { sql } from "@databases/pg";
import { modify__email } from "serverUtil/normalize";
export const config = {
  api: {
    bodyParser: true,
  },
};

const nextRouteDirector = nextConnect({
  onError,
  onNoMatch,
  attachParams: true,
});

nextRouteDirector.post("/api/upload/content", (req, res) => {
  // TODO: place this with a query to get user email
  // Use session data and only send post data through request.
  let { id, ownerEmail, ownerUsername, postTitle, postImage } = req.body;
  let imageBuffer = base64_To_ImageBuffer(postImage);
  writeToFileSystem(id, postTitle, modify__email(ownerEmail), imageBuffer);
  let postgres = Connect();
  cloudinaryUpload(
    id,
    postTitle,
    modify__email(ownerEmail),
    ({ public_id, resource_type }) => {
      queryPostgres(
        postgres,
        sql`SELECT * FROM users WHERE email=${modify__email(ownerEmail)}`,
        ({ id, email, posts }) => {
          queryPostgres(
            postgres,
            sql`INSERT INTO posts (post_type, post_content, post_owner, post_category) VALUES (${resource_type}, ${public_id}, ${id}, ${"data"})`,
            (results) => {
              console.log({ queryPostgres, results });
              queryPostgres(
                postgres,
                sql`UPDATE users SET posts=${posts + 1} WHERE id=${id}`,
                (results) => {
                  console.log({ queryPostgres, results });
                  postgres.dispose();
                }
              );
            }
          );
        }
      );
    }
  );
  res.send({ message: "Upload Sucessful" });
});
nextRouteDirector.get("/api/upload/query", (req, res) => {
  res.send({ message: "Get With params Sucessful" });
});

export default nextRouteDirector;
