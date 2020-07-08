/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 14:12:01
 * @LastEditTime: 2020-07-07 16:11:14
 * @FilePath: \tts\config\webpack.dev.js
 */
const path = require("path");
const webpackConfigCreator = require("./webpack.common");
const merge = require("webpack-merge");
const config = {
  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    hot: true,
    publicPath: "/",
    stats: "errors-only", // 只在发生错误时输出
    quiet: true, //turn off errors to work with friendly-errors-webpack-plugin
  },
};
const options = {
  mode: "development",
};
module.exports = merge(webpackConfigCreator(options), config);
