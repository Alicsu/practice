const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
        	template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
            	test: /.san$/,
            	use: 'san-loader'
            },
            {
            	test: /.css$/,
            	use: 'css-loader,style-loader'
            },
            {
            	test: /.html$/,
            	use: 'html-loader'
            }
        ]
    }
};