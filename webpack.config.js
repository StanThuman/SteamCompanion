const path = require('path');
var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');

var browserConfig = {

  mode: 'development',
  entry: "./src/browser/index.js",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "bundle.js",
    publicPath: '/'
  },

  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /notes/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true
    })

  ]
}

// var unitTestsConfig = {
//   target: 'node',
//   mode: 'development',
//   entry: './src/tests/test.js',
//   output: {
//     path: __dirname,
//     filename: 'tests.js',
//     publicPath: '/'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js)$/,
//         exclude: [/node_modules/, /notes/],
//         loader: 'babel-loader'
//       }//end module
//     ]
//   }
// }

var serverConfig = {
  mode: 'development',
  target: 'node',
  externals:[nodeExternals()],
  entry: './src/server/index.js',
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/, /notes/],
        loader: 'babel-loader'
      }

    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: false
    })
  ]
}

module.exports = [serverConfig, browserConfig]//, stylesConfig]; unitTestsConfig
