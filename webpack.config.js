const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  // Input file
  entry: ["./src/js/index.js"],

  // Output file
  output: {
    filename: "./js/bundle.js",
    path: path.resolve(__dirname, "dist"), // Add output path
  },

  // Source maps for easier debugging
  devtool: "source-map",

  module: {
    rules: [
      // Transpile JavaScript using Babel
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src/js"),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      // Compile SCSS into CSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract css to separate file
          "css-loader", // translates CSS into CommonJS
          "postcss-loader", // parse CSS and add vendor prefixes to CSS rules
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
      },

      // Fonts are connected using CSS
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },

      // Images are connected using CSS
      {
        test: /\.(svg|png|jpg|jpeg|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "static/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    // Connect the HTML file — styles and scripts will load automatically.
    new HtmlWebpackPlugin({
      title: "Webpack 5 Starter",
      template: "./src/index.html",
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: false,
      },
    }),

    // Styles are placed in a separate file.
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),

    // Copy the images to the appropriate folder.
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/assets/images"),
          to: "images", // all images to dist/images/
        },
        {
          from: path.resolve(__dirname, "src/assets/icons"),
          to: "icons", // all icons to dist/icons/
        },
      ],
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), // Updated from contentBase
    compress: true,
    port: 9000,
    hot: true, // Enable Hot Module Replacement
    watchFiles: {
      paths: ["src/**/*"], // Watch for changes in source files
    },
    client: {
      overlay: true, // Show errors and warnings in the browser
    },
  },
};
