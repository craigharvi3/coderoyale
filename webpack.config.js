const path = require("path");
const nodeExternals = require("webpack-node-externals");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const NodemonPlugin = require("nodemon-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const RemovePlugin = require("remove-files-webpack-plugin");

module.exports = (environmentVariables, options) => {
  const isProdMode = options.mode === "production";

  const serverConfig = {
    name: "Server Bundle",
    target: "node",
    entry: "./src/server.js",
    output: {
      filename: "server.js",
      path: path.resolve(__dirname, "dist/app"),
      libraryTarget: "commonjs2"
    },
    externals: [nodeExternals()],
    devtool: false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, "node_modules"),
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    debug: true,
                    useBuiltIns: "usage",
                    corejs: {
                      version: "3"
                    },
                    targets: {
                      node: "10"
                    }
                  }
                ],
                "@babel/preset-react"
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    plugins: [new CleanWebpackPlugin()]
  };

  const clientConfig = {
    name: "Client Bundle",
    target: "web",
    entry: {
      app: "./src/client.jsx"
    },
    output: {
      path: path.join(__dirname, "assets"),
      filename: isProdMode ? "js/[name].js" : "js/[name].js",
      library: "[name]"
    },
    devtool: isProdMode ? "source-map" : false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: path.resolve(__dirname, "node_modules"),
          include: path.resolve(__dirname, "src"),
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    modules: false,
                    debug: true,
                    useBuiltIns: "usage",
                    corejs: {
                      version: "3"
                    },
                    targets: {
                      browsers: ["last 2 versions", "iOS >= 10", "not dead"]
                    }
                  }
                ],
                "@babel/preset-react"
              ]
            }
          }
        },
        {
          test: /\.s?css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
        },
        {
          test: /\.jpe?g$|\.ico$|\.gif$|\.png$/,
          loader: "file-loader?name=img/[name].[ext]" // <-- retain original file name
        }
      ]
    },
    resolve: {
      extensions: [".js", ".jsx", ".json"]
    },
    plugins: [
      // commeting out until https://github.com/webpack-contrib/copy-webpack-plugin/issues/385 is fixed
      // new CleanWebpackPlugin(),
      new RemovePlugin({
        /**
         * Before compilation removes entire `assets` folder.
         */
        before: {
          include: ["assets"]
        }
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css"
      })
    ]
  };

  if (!isProdMode) {
    serverConfig.plugins.push(
      new NodemonPlugin({
        watch: path.resolve(__dirname, "dist"),
        script: "./dist/app/server.js"
      })
    );
  }

  if (isProdMode) {
    clientConfig.optimization = {
      ...clientConfig.optimization,
      ...{
        // https://webpack.js.org/configuration/optimization/#optimizationminimize
        minimizer: [
          // https://webpack.js.org/plugins/terser-webpack-plugin
          new TerserPlugin({
            test: /\.js(\?.*)?$/i,
            exclude: /node_modules/,
            cache: true,
            parallel: true,
            sourceMap: true, // Must be set to true if using source-maps in production
            terserOptions: {
              output: {
                comments: false
              }
            }
          }),
          new OptimizeCSSAssetsPlugin()
        ]
      }
    };
  }

  return [serverConfig, clientConfig];
};
