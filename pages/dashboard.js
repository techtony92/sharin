import Link from "next/link";
import NextPortrait from "UI/Components/NextPortrait";
import SideBar from "../UI/Components/Sidebar";
import { defaultBanner, profilePhoto1 } from "util/imageBank";
import { TextButton } from "../UI/Components/Button";
import { AuthenticationGate } from "UI/Layouts/AuthenticationGate";
import { useState } from "react";
import { beginMediaConversion } from "util/mediaUtil";
export default function Dashboard() {
  const [focused, setFocused] = useState("");

  const validateAvatarFileType = (file) => {
    const fileTypes = [
      "image/apng",
      "image/bmp",
      "image/gif",
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/svg+xml",
      "image/tiff",
      "image/webp",
      "image/x-icon",
    ];

    function validFileType(file) {
      return fileTypes.includes(file.type);
    }
  };
  const changeAvatar = (event) => {
    if (event.target.files === null) return;
    const reader = new FileReader();
    beginMediaConversion(event.target.files[0], reader, (media) => {
      let identifier = event.target.getAttribute("id");
      fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ media: media, id: identifier }),
      });
    });
  };
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
            <div id="content" className="w-full h-full mx-14">
              <NextPortrait
                classes={"relative w-full h-1/2"}
                src={defaultBanner}
                layout={"fill"}
                waterFall={false}
                waterFallElements={
                  <input
                    id="banner"
                    className="rounded-full opacity-0 w-full h-full absolute z-10 pointer-events-auto"
                    accept="image/png, image/jpeg images/jpg"
                    type={"file"}
                    onChange={(event) => changeAvatar(event)}
                  />
                }
              />
              <NextPortrait
                classes={"relative bottom-32 w-15 h-15 m-auto"}
                src={profilePhoto1}
                layout={"fill"}
                waterFall={true}
                waterFallProps={"rounded-full"}
                waterFallElements={
                  <input
                    id="avatar"
                    className="rounded-full opacity-0 w-full h-full absolute z-10 pointer-events-auto"
                    accept="image/png, image/jpeg images/jpg"
                    type={"file"}
                    onChange={(event) => changeAvatar(event)}
                  />
                }
              />
              <div
                id="profileViewOptions"
                className="flex flex-row justify-center "
              >
                <TextButton
                  type={"button"}
                  label={"Created"}
                  theme={"dark"}
                  classes={"rounded-full"}
                  id={"Created"}
                  focused={focused}
                  setFocused={setFocused}
                />

                <TextButton
                  type={"button"}
                  label={"Favorited"}
                  theme={"dark"}
                  classes={"rounded-md"}
                  id={"Favorited"}
                  focused={focused}
                  setFocused={setFocused}
                />
              </div>
            </div>
          </div>
        </AuthenticationGate>
      </div>
    </>
  );
}
