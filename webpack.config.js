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
      }//,
      // { test: /\.scss$/,
      //   use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      // }//end module
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: true
    })

  ]
}

var unitTestsConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/tests/index.js',
  output: {
    path: __dirname,
    filename: 'tests.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: [/node_modules/, /notes/],
        loader: 'babel-loader'
      }//end module
    ]
  }
}

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
      // ,{ test: /\.scss$/,
      //   use: ["css-loader", "sass-loader",  ]
      // }//end
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: false
    })
  ]
}

// "babel": {
//   "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react"
//   ]
// },

module.exports = [serverConfig, unitTestsConfig, browserConfig]//, stylesConfig];
