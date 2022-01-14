import SearchBar from "./SearchBar";
import Link from "next/link";
import { BsPlus } from "react-icons/bs";
import NextPortrait from "./NextPortrait";
const TopBar = () => {
  return (
    <>
      <div
        id="topbar"
        className="my-12 flex flex-row justify-between items-center w-full h-auto"
      >
        <SearchBar />
        <div id="userActions" className="w-25 flex flex-row justify-between">
          <div
            id="userAvatar"
            className="rounded-full bg-DarkMode__secondaryBase w-auto h-auto ml-12"
          >
            <NextPortrait
              classes={"w-8 h-8 relative rounded-full"}
              layout={"fill"}
              src={"/temp/avatar/avatar.png"}
            />
          </div>
          <Link passHref={true} href="/uploadContent">
            <div className="w-8 h-8 bg-DarkMode__secondaryBase relative">
              <BsPlus className="text-textSize__5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopBar;
