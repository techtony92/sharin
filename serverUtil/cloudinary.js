import cloudainary from "cloudinary";
import { join, format } from "path";
import { v4 as uuidv4 } from "uuid";
export const cloudinaryUpload = async (
  id,
  postTitle,
  ownerEmail,
  linkDataInDatabase
) => {
  const contentPath = format({
    dir: join(__dirname, "..", "..", ".."),
  });
  console.log({ cloudinaryUpload, contentPath });
  switch (id) {
    case "avatar":
      await cloudainary.v2.uploader.upload(
        `${contentPath}/temp/${ownerEmail}/avatar/avatar.png`,
        {
          public_id: `sharin/${ownerEmail}/avatar/avatar`,
          type: "upload",
        },
        (error, result) => {
          if (error) console.error(error.message);
          console.log(result);
        }
      );
      break;
    case "banner":
      await cloudainary.v2.uploader.upload(
        `${contentPath}/temp/${ownerEmail}/banner/banner.png`,
        {
          public_id: `sharin/${ownerEmail}/banner/banner`,
          type: "upload",
        },
        (error, result) => {
          if (error) console.error(error.message);
          console.log(result);
        }
      );
      break;
    case "post":
      console.log("Send File to Cloudinary");
      await cloudainary.v2.uploader.upload(
        `${contentPath}/temp/${ownerEmail}/content/posts/${postTitle}.png`,
        {
          public_id: `sharin/${ownerEmail}/content/posts/${uuidv4()}`,
          type: "upload",
        },
        (error, result) => {
          if (error) throw new Error(error.message);
          linkDataInDatabase(result);
        }
      );
      break;
    default:
      return null;
  }
};
