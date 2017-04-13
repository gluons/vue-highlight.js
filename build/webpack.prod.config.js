const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.config');

let webpackConfig = merge(baseWebpackConfig, {
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'vue-highlight.min.js',
		libraryTarget: 'umd',
		library: 'VueHighlightJS',
		umdNamedDefine: true
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	],
	devtool: 'source-map',
	externals: {
		'highlight.js': {
			root: 'hljs',
			commonjs: 'highlight.js',
			commonjs2: 'highlight.js',
			amd: 'highlight.js'
		}
	}
});

module.exports = webpackConfig;
