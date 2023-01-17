const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  // development 모드는 개발자 경험에 초점이 맞춰진 모드
  // production모드는 배포에 초점이 맞춰진 모드
  mode: "development",

  // filename의 [hash]는 어플리케이션이 수정되어
  // 다시 컴파일될 때마다 Webpack(웹팩)에서 생성된 해시로 변경해 캐싱
  // build 시 확인 가능
  // entry가 하나여야, SPA 임
  // entry:'./src/index.js', 설정 기본값
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[hash].js",
  },

  module: {
    rules: [
      // 첫 번째 룰
      // .babelrc를 babel-loader를 이용해 규칙에 적용
      {
        test: /\\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      // 두 번째 룰
      {
        test: /\\.css$/,
        use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader"],
        // 각 로더에 옵션 적용 가능
        // 좌 <- 우 순서로 적용되기 때문에 위와 같은 순으로 작성해주어야 함
      },
    ],
  },

  plugins: [
    // HtmlWebpackPlugin은 html파일이나 favicon을 번들링과정에 포함
    // 예를들어 번들된 파일 bundle.[hash].js를 index.html에 자동 삽입
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
  ],

  // 개발 서버 정의
  devServer: {
    host: "localhost",
    port: port,
    // 서버 실행 시 자동으로 브라우저 열어주는 옵션
    open: true,
    // 브라우저에서 URL 변경하도록 도와주는 옵션
    historyApiFallback: true,
  },
  optimization: {
    minimizer: [
      // `...`는 기존의 minimizer 옵션을 확장하기 위해서 사용, 생략하면 기본값인 terser plugin 등이 생략되기 때문에 JS의 minify가 되지 않는다.
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
