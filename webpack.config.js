const path = require('path');

const srcPath = path.join(__dirname, 'client/src');

const buildPath = path.join(__dirname, 'client/dist');

const config = {
  entry: path.join(srcPath, 'components/App.jsx'),
  output: {
    path: buildPath,
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};

module.exports = config;
