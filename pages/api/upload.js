import nextConnect from "next-connect";
import API_GATE__AUTHENTICATION from "middleware/authentication";
import API_GATE__LOGGER from "middleware/logger";
import { cloudinaryUpload } from "../../serverUtil/cloudinary";

import { onError, onNoMatch } from "util/nextConnectOptions";
import { URL_To_File } from "../../serverUtil/URI_To_Buffer";

export const config = {
  api: {
    bodyParser: true,
  },
};

const nextRouteDirector = nextConnect({
  onError,
  onNoMatch,
  attachParams: true,
});

nextRouteDirector.post(API_GATE__LOGGER, (req, res) => {
  const { media, id } = req.body;
  URL_To_File(media, id);
  cloudinaryUpload(id);
  console.log("profilePhotoUploaded");
});

export default nextRouteDirector;
