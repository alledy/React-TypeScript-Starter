const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
    modules: ["node_modules"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ }]
  },
  devServer: {
    contentBase: "./",
    publicPath: "/dist"
  }
};
