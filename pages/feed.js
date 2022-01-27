import Link from "next/link";
import SideBar from "UI/Components/Sidebar";
// import { queryPostgres, Connect } from "DataBase/postgres";
// import { sql } from "@databases/pg";
import { AuthenticationGate } from "UI/Layouts/AuthenticationGate";
import { HotFeedUpdate } from "util/fetchData";
import useTimer from "UI/hooks/useTimer";
export default function Feed({ message }) {
  return (
    <>
      <div
        id="feed"
        className="w-screen h-screen bg-DarkMode__primaryBase m-auto"
      >
        <AuthenticationGate>
          <div id="content" className="flex flex-row justify-start w-9 h-9">
            <div id="contentMain" className="">
              {/* {useTimer(HotFeedUpdate("/api/feedUpdate"))} */}
              {message}
            </div>
          </div>
        </AuthenticationGate>
      </div>
    </>
  );
}
