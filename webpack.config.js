const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist/build');

module.exports = {
  entry: `${SRC_DIR}/app.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          env: {
            test: {
              presets: ['es2015', 'react']
            }
          }
        }
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
