(() => {
  const beginMediaConversion = (media, reader, readyDataForTransfer) => {
    let mediaData = null;
    reader.onload = async () => {
      //Convert to base 64 here
      console.log(reader);
      mediaData = await reader.result;
      readyDataForTransfer(mediaData);
    };

    reader.readAsDataURL(media);
  };

  module.exports = {
    beginMediaConversion,
  };
})();
