var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BrowserSync = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        frontend: './js/index'
    },
    output: {
        filename: './public/js/[name].js'
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [
            {
                test: /\.sass$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader", options: {
                            sourceMap: true
                        }
                    }]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './public/css/[name].css'
        }),
        new BrowserSync({
            host: 'localhost',
            port: 3000,
            server: { baseDir: ['.'] },
            open: false
        })
    ]
};