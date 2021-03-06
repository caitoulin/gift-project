const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const devConfig = require('./webpack.dev.config.js');
const compiler = webpack(devConfig);

const hotMiddleWare = require('webpack-hot-middleware')(compiler, {
    log: false,
    heartbeat: 2000,
});
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: devConfig.output.publicPath,
    })
);
app.use(express.static(devConfig.output.path));
app.use(hotMiddleWare);
app.listen(3000, () => {
    console.log('listen to : 3000');
});
