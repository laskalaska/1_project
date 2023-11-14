const path = require('path');
module.exports = {
    mode: 'production', // or 'development' - then no 'minify'
    entry: './src/js/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devServer: {
        // static: {
        //     directory: path.join(__dirname, 'dist')
        // },
        static: {
            directory: './',
            watch: true
        },
        port: 5000,
        compress: true
    },
    module: {
        rules: [
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
    // module: [...], // loaders
    // plugins: [...],
};
