const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const plugins = [
    new HtmlWebpackPlugin({
        title: "MAXIM SVILYONOK CV",
        template: path.resolve(__dirname, "./src/template.html"),
        filename: "index.html",
    }),
    // new CleanWebpackPlugin(),
];

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./"),
        filename: "[name].bundle.js",
    },
    experiments: {
        asset: true,
    },
    module: {
        rules: [{
                test: /\.(s*)css$/,
                use: ['style-loader', "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpg|jpeg|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            },
        ],
    },
    mode: "development",
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "./dist"),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins,
};