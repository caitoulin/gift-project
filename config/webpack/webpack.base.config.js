const path = require('path');
const webpack = require('webpack');
const devMode = process.env.NODE_ENV !== 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 确定页面入口，动态将css及js插入html
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.resolve(__dirname, '../../app/view/index.html'),
});

const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'lib/style.css',
});

module.exports = {
    devtool: devMode
        ? 'cheap-eval-module-source-map'
        : 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client', //热更新
        path.resolve(__dirname, '../../app/view/src/index.tsx'),
    ],
    output: {
        path: path.join(__dirname, '..', '..', '/app/view/dist/'),
        filename: 'lib/bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.json', '.tsx', '.ts', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
                    'less-loader',
                ],
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(tsx|ts)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.(img|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                },
            },
            {
                test: /\.(woff|woff2|eot|otf|ttf)$/,
                use: 'file-loader',
            },
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        miniCssExtractPlugin,
        new webpack.DllReferencePlugin({
            manifest: require('../../app/view/dist/dll/vendor.manifest.json'),
        }),
    ],
};
