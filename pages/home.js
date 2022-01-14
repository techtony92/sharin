import Link from "next/link";
import { AuthenticationGate } from "UI/Layouts/AuthenticationGate";
import Feed from "./feed";
import SideBar from "UI/Components/Sidebar";
import TopBar from "UI/Components/topBar";
import { FeedPost, FeedPostSM } from "UI/Components/Feed/FeedPost";

const Home = () => {
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
              <FeedPost />
              <FeedPostSM />
              <FeedPostSM />
              <FeedPost />
              <FeedPostSM />
              <FeedPostSM />
            </div>
          </div>
        </AuthenticationGate>
      </div>
    </>
  );
};

export default Home;
