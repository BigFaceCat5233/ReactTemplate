/*
 * @Author: he xiaojun
 * @Date: 2020-07-06 14:12:35
 * @LastEditTime: 2020-07-06 17:19:10
 * @FilePath: \tts\scripts\start.js
 */ 

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../config/webpack.dev.js');

const compiler = webpack(webpackConfig);
const options = Object.assign({}, webpackConfig.devServer, {
    open:true
})
const server = new webpackDevServer(compiler, options);

server.listen(3000, '127.0.0.1', () => { 
    console.log('开启成功')
})

