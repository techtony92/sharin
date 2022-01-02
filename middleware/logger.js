const API_GATE__LOGGER = (req, res, next) => {
  const { headers, url, method, body } = req;

  console.log({ headers });
  console.log(url);
  console.log(method);
  console.log(body);
  next();
};

export default API_GATE__LOGGER;
