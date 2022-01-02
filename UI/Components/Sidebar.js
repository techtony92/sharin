import NextPortrait from "./NextPortrait";
import option_Cars from "../../assets/image/cars.jpg";
import option_Art from "../../assets/image/art.jpg";
import option_Food from "../../assets/image/food.jpg";
import option_Nature from "../../assets/image/nature.jpg";
import option_Wallpapers from "../../assets/image/wallpapers.jpg";
import option_Websites from "../../assets/image/websites.jpg";
import { FaHome } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
const SideBar = () => {
  return (
    <div
      id="sideBar"
      className="bg-DarkMode__secondaryBase w-30 h-screen flex flex-col justify-around px-8 pt-8"
    >
      <div
        id="sideBarSiteName"
        className=" w-30 h-auto flex flex-row justify-start items-center mb-24 pl-8"
      >
        <FaCamera className="text-textSize__5 text-red-500 stroke-slate-200 stroke-2" />
        <h1
          id="SiteTitle"
          className="text-DarkMode__text text-textSize__4 font-bold tracking-widest ml-8"
        >
          Sharin
        </h1>
      </div>
      <div
        id="sideBarHome"
        className=" w-30 h-auto flex flex-row justify-start items-center mb-14 pl-8"
      >
        <FaHome className={"text-textSize__4"} />
        <h3 className="text-textSize__Labels ml-8">Home</h3>
      </div>
      <h1
        id="sideBarTitle"
        className="text-textSize__2_5 mb-8 text-DarkMode__text"
      >
        Discover Categories
      </h1>
      <div id="sideBarList" className="w-full h-full">
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Cars}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Cars{" "}
          </h3>
        </div>
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Art}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Art{" "}
          </h3>
        </div>
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Food}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Food{" "}
          </h3>
        </div>
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Nature}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Nature{" "}
          </h3>
        </div>
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Wallpapers}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Wallpapers{" "}
          </h3>
        </div>
        <div
          id="sidebarListOption"
          className="w-full h-auto py-8 flex flex-row justify-start items-center"
        >
          <NextPortrait
            classes={"relative w-7 h-7 rounded-full"}
            waterFall={true}
            waterFallProps={"rounded-full"}
            src={option_Websites}
            layout={"fill"}
            alt={"Side Item Icon"}
          />
          <h3
            id="sideBarListOptionLabel"
            className="text-DarkMode__text ml-8 text-textSize__Labels font-normal"
          >
            {" "}
            Websites{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
