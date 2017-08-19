const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, '../src/index.js'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		libraryTarget: 'umd',
		library: 'VueHighlightJS',
		umdNamedDefine: true
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						js: 'babel-loader'
					},
					extractCSS: true
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: 'css-loader'
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('[name].css')
	],
	resolve: {
		extensions: ['.js', '.json', '.vue'],
		alias: {
			'@': path.resolve(__dirname, '../src')
		}
	}
};
