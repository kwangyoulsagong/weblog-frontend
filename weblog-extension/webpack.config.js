const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // 프로젝트의 진입점(entry point)
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/static/js"), // 빌드 결과물의 경로
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};
