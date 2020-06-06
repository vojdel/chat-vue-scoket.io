const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  entry: {
  	app: './src/js/app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: [ "babel-loader", "eslint-loader" ]
      },
      {
      	test: /\.css$/,
      	use: [
      	  "vue-style-loader",
      	  "css-loader"
      	]
      },
      {
      	test: /\.scss$/,
      	use: [
      	  "vue-style-loader",
      	  "style-loader",
      	  "css-loader",
      	  "sass-loader"
      	]
      },
      {
      	test: /\.(png|jpg|gif)$/,
      	use: [
      		{ loader: 'url-loader'}
      	]
      },
      {
      	test: /\.vue$/,
      	use: [
      		{ loader: 'vue-loader' }
      	]
      }
  ]
},
resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
  	new VueLoaderPlugin()
  ],
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
};