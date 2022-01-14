const { mkdirSync, writeFileSync, existsSync } = require("fs");
const { format, join } = require("path");
const projectPath = format({
  dir: join(__dirname, "..", "..", "..", "..", ".."),
});

export const writeToFileSystem = (id, contentTitle, owner, dataBuffer) => {
  console.log({ writeToFileSystem, projectPath });
  checkDir(owner);
  switch (id) {
    case "avatar":
      let localAvatarPath = format({
        dir: join(
          projectPath,
          "temp",
          `${owner}`,
          "avatar",
          `${contentTitle}.png`
        ),
      });
      writeFileSync(localAvatarPath, dataBuffer, (error, result) => {});
      break;
    case "banner":
      let localBannerPath = format({
        dir: join(
          projectPath,
          "temp",
          `${owner}`,
          "banner",
          `${contentTitle}.png`
        ),
      });
      writeFileSync(localBannerPath, dataBuffer, (error, result) => {});
      break;
    case "post":
      let localContentPath = format({
        dir: join(
          projectPath,
          "temp",
          `${owner}`,
          "content",
          "posts",
          `${contentTitle}.png`
        ),
      });
      writeFileSync(localContentPath, dataBuffer, (error, result) => {});
  }
};

const checkDir = (owner) => {
  if (!existsSync(`${projectPath}/temp/${owner}/avatar/`)) {
    mkdirSync(`${projectPath}/temp/${owner}/avatar/`, {
      recursive: true,
    });
  }
  if (!existsSync(`${projectPath}/temp/${owner}/banner/`)) {
    mkdirSync(`${projectPath}/temp/${owner}/banner/`, {
      recursive: true,
    });
  }
  if (!existsSync(`${projectPath}/temp/${owner}/content/posts`)) {
    mkdirSync(`${projectPath}/temp/${owner}/content/posts`, {
      recursive: true,
    });
  }

  return null;
};
