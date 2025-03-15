const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { configDotenv } = require("dotenv");
configDotenv();

const port = process.env.PORT;

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/' // Tambahkan ini
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        type: "asset/resource", // Gantikan "file-loader" di Webpack 5
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 3001,
    hot: true,
    historyApiFallback: true,
    proxy: [
      {
        context: ["/api"], // Semua request ke /api akan diarahkan ke backend
        target: `http://localhost:${port}`,
        changeOrigin: true,
      },
    ],
  },
};