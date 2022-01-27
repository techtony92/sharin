const { Connect, queryPostgres } = require("../DataBase/@test__Postgres");
const faker = require("@faker-js/faker");
const { sql } = require("@databases/pg");
require("dotenv").config();
describe("Create Sample Users for the database", () => {
  const postgres = Connect();
  let testMaxx;
  const generateUsers = (MAXX) => {
    let users = [];
    for (let iterator = 0; iterator < MAXX; iterator++) {
      let user = {};
      user.name = faker.name.findName();
      user.email = faker.internet.email();
      user.password = "generated";
      user.posts = 0;
      user.favorites = 0;
      users[iterator] = user;
    }
    return users;
  };

  beforeEach(() => {
    testMaxx = 1601;
  });

  it.skip("Should Create a Total of 800 Sample Users", () => {
    let users = generateUsers(testMaxx);
    expect(users.length).toBe(testMaxx);
  });

  it.skip("Should Query The Database and Add 800 Users to the Database", () => {
    let users = generateUsers(testMaxx);
    let insertionSuccess = 0;
    for (let iterator = 799; iterator < testMaxx; iterator++) {
      console.log(iterator);

      queryPostgres(
        postgres,
        sql`INSERT INTO users (username ,email , password, posts, favorites, user_id) VALUES (${users[iterator].name}, ${users[iterator].email}, ${users[iterator].password}, ${users[iterator].posts}, ${users[iterator].favorites}, ${iterator})`,
        (results, status) => {
          if (status === "error") return;
          insertionSuccess += 1;
          if (iterator === testMaxx) {
            expect(insertionSuccess).toBe(testMaxx);
          }
        }
      );
    }
  });

  afterAll(() => {
    postgres.dispose();
  });
});
