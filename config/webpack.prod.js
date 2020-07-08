/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 14:12:12
 * @LastEditTime: 2020-07-07 15:37:59
 * @FilePath: \tts\config\webpack.prod.js
 */
const path = require("path");
const webpackConfigCreator = require("./webpack.common");
const merge = require("webpack-merge");
const optimizeCss = require("optimize-css-assets-webpack-plugin");

const config = {
  output: {
    filename: "js/[name][chunkhash].js",
  },
  plugins: [
    new optimizeCss({
      cssProcessor: require("cssnano"),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true,
    }),
  ],
};

const options = {
  model: "production", // 生产环境  开发环境 development
};

module.exports = merge(webpackConfigCreator(options), config);
