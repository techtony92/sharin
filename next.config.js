const webpack = require("webpack");
const { parsed: envKeys } = require("dotenv").config({ path: "./.env" });

module.exports = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(envKeys));
    return config;
  },
};
