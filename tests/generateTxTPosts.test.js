const { Connect, queryPostgres } = require("../DataBase/@test__Postgres");
const faker = require("@faker-js/faker");
const { sql } = require("@databases/pg");
require("dotenv").config();

describe("Create 10 Sample Text Posts for each user in the Database", () => {
  const postgresConnection = Connect();
  const postMAXX = 10;
  const userMAXX = 200;
  const generateAlphanumericPost = (MAXX) => {
    let textPosts = [];
    for (
      let textPostIterator = 0;
      textPostIterator < MAXX;
      textPostIterator++
    ) {
      let textPost = {};
      textPost.title = `Sample Title ${textPostIterator}`;
      textPost.description = `some text desciptions`;
      textPosts[textPostIterator] = textPost;
    }
    return textPosts;
  };

  it.skip("Should Create 10 Text Based Posts For Each User", () => {
    expect(generateAlphanumericPost(postMAXX).length).toBe(postMAXX);
  });

  it.skip("Should Query Each User and Upload 10 Text Posts to Their Records", () => {
    let textPosts = generateAlphanumericPost(postMAXX);
    for (let userIterator = 0; userIterator < userMAXX; userIterator++) {
      queryPostgres(
        postgresConnection,
        sql`SELECT id FROM users WHERE id=${userIterator}`,
        (result, status) => {
          if (status === "error" || result === undefined) return;
          for (
            let textPostIterator = 0;
            textPostIterator < postMAXX;
            textPostIterator++
          ) {
            queryPostgres(
              postgresConnection,
              sql`UPDATE posts SET post_type = ${"TEXT"} 
              post_title = ${textPosts[textPostIterator]}
              post_content = ${textPosts[textPostIterator].description}
              post_owner = ${result[0].id}
               post_content = ${"SAMPLE_DATA"}`,
              (result, status) => {
                expect(status).toBe("success");
              }
            );
          }
        }
      );
    }

    postgresConnection.dispose();
  });
});
