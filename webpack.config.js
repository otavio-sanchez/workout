const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DefinePlugin = new Webpack.DefinePlugin({
  "process.env": {
    NODE_ENV: JSON.stringify("development"),
  },
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: "./public/index.html",
});

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[hash].bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js", ".js", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },

      {
        test: /\.svg$/,
        use: [
          {
            loader: "@svgr/webpack",
            options: {
              configFile: "./config/svg.js",
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
  },
  plugins: [DefinePlugin, HTMLWebpackPluginConfig],
};
