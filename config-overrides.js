/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */

const { override } = require("customize-cra");
const { addReactRefresh } = require("customize-cra-react-refresh");
const { resolve } = require("path");
const StylelintPlugin = require("stylelint-webpack-plugin");

const webpack = (config, env) => {
  if (env === "development") {
    config.plugins.push(new StylelintPlugin({ files: "**/*.(tsx|scss|css)" }));
    config.module.rules.push({
      test    : /\.(js|mjs|jsx|ts|tsx)$/,
      enforce : "pre",
      use     : [
        { loader: "eslint-loader" },
      ],
      exclude: /node_modules/,
    });
  }
  config.resolve.alias["@"] = resolve(__dirname, "src");
  return config;
};

module.exports = override(webpack, addReactRefresh({ disableRefreshCheck: true }));
