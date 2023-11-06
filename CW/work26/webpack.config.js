// webpack.config.js
import path from "path";
import { fileURLToPath} from 'url';
import HtmlWebpackPlugin from "html-webpack-plugin";
import ESLintPlugin from 'eslint-webpack-plugin';

const __filename = fileURLToPath(import.meta.url); //find full url of file
console.log(__filename);
const __dirname = path.dirname(__filename); //get dir name

export default {
    mode: 'development',
    entry: './src/js/app.js',
    devtool: 'source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // watch: true,
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Preset chat bot',
            template: './index.html'
        }),
        new ESLintPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        port: 3000
    }
};
//
// // webpack.config.js common JS
//
// const path = require('path');
// module.exports = {
//     mode: 'development',
//     entry: './src/app.js',
//     devtool: 'source-map',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
// };
