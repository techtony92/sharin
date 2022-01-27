export const HotFeedUpdate = (URL) => {
  if (window === undefined) return;
  fetch(URL)
    .then((response) => response.json)
    .then((data) => {})
    .catch((error) => {
      console.log(error);
    });
};
