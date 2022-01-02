export const onError = (error, req, res, next) => {
  console.error(error.stack);
  res.status(500).end("Server Error");
};

export const onNoMatch = (req, res, next) => {
  res.status(404).end("Page is not Found");
};
