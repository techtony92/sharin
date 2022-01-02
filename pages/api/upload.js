import nextConnect from "next-connect";
import API_GATE__AUTHENTICATION from "middleware/authentication";
import API_GATE__LOGGER from "middleware/logger";
import cloudinary from "cloudinary";

import { onError, onNoMatch } from "util/nextConnectOptions";

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
  console.log("posted");
});

export default nextRouteDirector;
