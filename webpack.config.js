var path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
}
