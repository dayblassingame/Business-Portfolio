const path = require('path');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.js'),
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',]
            },
            {
                test: /\.(svg|png|jpg|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                        plugins: ['@babel/plugin-macros']
                    }
                },
                ],
              },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 3343,
        hot: true,
    },
};