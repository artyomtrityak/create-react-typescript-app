var path = require('path');

module.exports = {
  mode: 'development',
  entry: './app/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
    ]
  },

  output: {
    path: path.join(__dirname, '/build/app/'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:9000/build/javascript/'
  },

  devServer: {
    port: 9000,
    contentBase: './'
  },

  devtool: "source-map"
};