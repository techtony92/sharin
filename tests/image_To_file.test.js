const { mkdirSync, writeFileSync, existsSync } = require("fs");
const { format, join } = require("path");
const { Buffer } = require("buffer");
const base64_To_ImageBuffer = require("../serverUtil/URI_To_Buffer");
const data = require("./mockImageData");
console.log(__dirname);

describe("File System Processing", () => {
  it("Should check if temp directory is available and if not, then create it", () => {
    let projectPath = format({
      dir: join(__dirname, ".."),
    });

    const checkDirs = () => {
      let doesContentDirExists = `${projectPath}/temp/${data.postOwner}/content/posts`;
      let doesAvatarDirExists = `${projectPath}/temp/${data.postOwner}/avatar`;
      let doesBannerDirExists = `${projectPath}/temp/${data.postOwner}/banner`;
      if (doesContentDirExists && doesAvatarDirExists && doesBannerDirExists)
        return true;
      return false;
    };

    if (!existsSync(`${projectPath}/temp/${data.postOwner}/content/posts`)) {
      mkdirSync(`${projectPath}/temp/${data.postOwner}/content/posts`, {
        recursive: true,
      });
    }
    if (!existsSync(`${projectPath}/temp/${data.postOwner}/avatar`)) {
      mkdirSync(`${projectPath}/temp/${data.postOwner}/avatar`, {
        recursive: true,
      });
    }
    if (!existsSync(`${projectPath}/temp/${data.postOwner}/banner`)) {
      mkdirSync(`${projectPath}/temp/${data.postOwner}/banner`, {
        recursive: true,
      });
    }

    expect(checkDirs()).toBe(true);
  });
});
