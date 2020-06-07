import express from 'express';
import path from 'path';

// Usar webpack

import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
const webpackConfig = require('../webpack.config.js');
const compiler = webpack( webpackConfig );

import indexRouter from '../routes/index';
import usersRouter from '../routes/users';

const app = express();

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

app.use('/', indexRouter);
app.use('/users', usersRouter);

const PORT = process.env.PORT || '3000';

// Star Server
app.listen(PORT, () => {
  console.debug("Server Listening on port "+PORT);
  console.log(PORT);
});