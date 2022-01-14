import TopBar from "UI/Components/topBar";
import SideBar from "UI/Components/Sidebar";
import NextPortrait from "UI/Components/NextPortrait";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FormCharacterInputField } from "../UI/Components/FormControl";
import { ContainedButton } from "../UI/Components/Button";
const UploadContent = () => {
  const [imageSrc, updateImageSrc] = useState("");
  const uploadImage = (event) => {
    if (!event.target.files[0]) return;
    updateImageSrc(URL.createObjectURL(event.target.files[0]));
    URL.revokeObjectURL();
  };
  return (
    <>
      <div
        id="content"
        className="w-full h-full flex flex-row flex-start bg-DarkMode__primaryBase"
      >
        <SideBar />
        <div
          id="content-main"
          className="mt-30 ml-30 mr-20 w-150 h-60 bg-DarkMode__secondaryBase"
        >
          <div
            id="contentUpload"
            className="ml-20 flex flex-row justify-around items-center w-full h-full"
          >
            <NextPortrait
              layout="fill"
              src={imageSrc}
              classes={"relative w-40 h-40 bg-DarkMode__primaryBase"}
            />
            <form
              method="POST"
              action="/"
              id="contentText"
              className="flex flex-col justify-center items-start w-auto h-auto"
            >
              <FormCharacterInputField
                fieldClassNames={
                  "mb-12 pb-1 w-60 text-textSize__3 placeholder-shown:text-textSize__3 placeholder-shown:text-DarkMode__textFaded border-b-2  border-DarkMode__border bg-transparent"
                }
                placeholder={"Title"}
                type={"text"}
                name={"title"}
              />
              <FormCharacterInputField
                fieldClassNames={
                  "mb-12 pb-1 w-60 text-textSize__3 placeholder-shown:text-textSize__3 placeholder-shown:text-DarkMode__textFaded border-b-2  border-DarkMode__border bg-transparent"
                }
                placeholder={"Tell Everyone About what Your Sharin"}
                type={"text"}
                name={"title"}
              />
              <ContainedButton label={"Share"} type={"submit"} theme={"dark"} />

              {/* <ContainedButton label={"share"} theme={"dark"} type={"submit"} /> */}
              {/* <FaUpload className="text-textSize__5" />
              <input type="file" className="absolute w-full h-full opacity-0" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadContent;
