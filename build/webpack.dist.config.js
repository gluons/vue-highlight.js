const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

let webpackConfig = merge(baseWebpackConfig, {
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
