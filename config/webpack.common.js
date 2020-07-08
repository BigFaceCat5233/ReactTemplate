/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 14:11:51
 * @LastEditTime: 2020-07-08 10:07:45
 * @FilePath: \tts\config\webpack.common.js
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

function webpackCommonConfigCreator(options) {
  return {
    mode: options.mode,
    entry: "./src/index.js", //入口文件
    output: {
      filename: "js/bundle.js",
      path: path.resolve(__dirname, "../build"),
    },
    module: {
      rules: [
        {
          // 图片loader
          test: /\.(jpg|png|svg|gif)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                limit: 10240,
                name: "images/[hash].[ext]",
              },
            },
          ],
        },
        {
          // 字体loader
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: ["file-loader"],
        },
        {
          // css loader&&scass loader
          test: /\.(css|scss)$/,
          include: path.resolve(__dirname, "../src"),
          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: {
                    mode: "local",
                    localIdentName: "[path][name]_[local]--[hash:base64:5]",
                  },
                  localsConvention: "camelCase",
                },
              },
              "sass-loader",
              {
                loader: "postcss-loader",
                options: {
                  ident: "postcss",
                  plugins: (loader) => [
                    require("postcss-import")({ root: loader.resourcePath }),
                    require("autoprefixer")(),
                  ],
                },
              },
            ],
          }),
        },
        {
          // js loader jsx loader
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "../src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"],
                plugins: ["react-hot-loader/babel"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../public/index.html"),
      }),
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [
          path.resolve(process.cwd(), "build/"),
          path.resolve(process.cwd(), "dist/"),
        ], // 清除指定目录下的文件
      }),
      new ExtractTextPlugin({
        filename: "css/[name][hash].css",
      }),
    ],
  };
}

module.exports = webpackCommonConfigCreator;
