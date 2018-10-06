const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const assets = require('./assets');

module.exports = {
  entry: {
    app: './src/app/index.js'
  },
  output: {
    path: path.join(__dirname, 'src/public/js'),
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin(
      assets.map(asset => {
        return {
          from: path.join(__dirname, `./node_modules/${asset}`), 
          to: path.join(__dirname, `./src/public/libs/${asset}`)
        }
      })
    )
  ]
};
