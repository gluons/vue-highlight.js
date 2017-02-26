const merge = require('webpack-merge');
const webpack = require('webpack');

const baseWebpackConfig = require('./webpack.base.config');

let webpackConfig = merge(baseWebpackConfig, {
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
