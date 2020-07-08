/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 14:12:21
 * @LastEditTime: 2020-07-07 15:32:15
 * @FilePath: \tts\scripts\build.js
 */ 
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.prod.js');

webpack(webpackConfig, (err, stats) => { 
    if (err || stats.hasErrors()) { 
        console.log("编译失败");
        console.log(stats);
    }
})