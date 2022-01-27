import Link from "next/link";
import { AuthenticationGate } from "UI/Layouts/AuthenticationGate";
import { sql } from "@databases/pg";
import { queryPostgres, Connect } from "DataBase/postgres";
import Feed from "./feed";
import SideBar from "UI/Components/Sidebar";
import TopBar from "UI/Components/topBar";
import { FeedPost, FeedPostSM } from "UI/Components/Feed/FeedPost";

const Home = ({ message }) => {
  return (
    <>
      <div
        id="dashboard"
        className="w-screen h-screen bg-DarkMode__primaryBase"
      >
        <AuthenticationGate>
          <div
            id="content-main"
            className="w-screen h-screen flex flex-row justify-between"
          >
            <SideBar />
            <div id="content" className="ml-30 mr-20 w-full h-full  ">
              <TopBar />

              {message}
            </div>
          </div>
        </AuthenticationGate>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps(context) {
  let postgres = Connect();
  console.log({ message: "getServerSideProps: feed" });
  queryPostgres(postgres, sql`SELECT * FROM posts`, (result) => {
    console.log({ result });
    queryPostgres(
      postgres,
      sql`SELECT email FROM users WHERE id=${result.post_owner}`,
      (result) => {
        console.log({ result });
      }
    );
    return {
      props: {},
    };
  });
  return {
    props: { message: "SomeData" },
  };
}
