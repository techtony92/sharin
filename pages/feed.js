import Link from "next/link";
import SideBar from "UI/Components/Sidebar";
import { AuthenticationGate } from "UI/Layouts/AuthenticationGate";
export default function Feed() {
  return (
    <>
      <div
        id="feed"
        className="w-screen h-screen bg-DarkMode__primaryBase m-auto"
      >
        <AuthenticationGate>
          <div id="content" className="flex flex-row justify-start">
            <SideBar />
            <div id="contentMain"></div>
          </div>
        </AuthenticationGate>
      </div>
    </>
  );
}
