const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      'react-native$': 'react-native-web',
    },
    extensions: ['.web.js', '.js', '.json', '.jsx'],
  },
  module: {
    rules: [
      // JavaScript and JSX loader
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!react-native-vector-icons)/, // Transpile vector icons
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // Image loader for handling image files
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/images',
              publicPath: 'assets/images',
            },
          },
        ],
      },
      // Loader for fonts and SVGs
      {
        test: /\.(svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              outputPath: 'assets/fonts',
              publicPath: 'assets/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './web/index.html',
    }),
    // Define process.env for the frontend
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),  // Inject environment variables
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'web'),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
};
