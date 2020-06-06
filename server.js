const http = require('http');
const express = require('express');
const path = require('path');

// Usar webpack

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');
const compiler = webpack( webpackConfig );

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));
app.set('view engine', 'pug');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Create Server
const server = http.createServer(app);

// Star Server
server.listen('3000', () => {
  console.debug("Server Listening on port 3000")
});