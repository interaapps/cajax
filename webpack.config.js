const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: 'cajax.js',
    path: path.resolve(__dirname, 'dist'),
    library: '',
    libraryExport: 'default',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
  
};