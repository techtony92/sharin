const { Buffer } = require("buffer");
export const base64_To_ImageBuffer = (dataURL) => {
  let URL_MEDIA_ARRAY = dataURL.split(",");
  let MIMEType = URL_MEDIA_ARRAY[0].match(/:(.*?);/)[1];
  let baseBuffer = Buffer.from(URL_MEDIA_ARRAY[1], "base64");
  return baseBuffer;
};
