const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
	plugins: [
		new CleanWebpackPlugin(['dist/public'], {exclude: 'favicon.ico'}),
		new HtmlWebpackPlugin({
			template: __dirname + '/src/index.html',
			filename: 'index.html'
		})
	],
	mode: 'production'
});