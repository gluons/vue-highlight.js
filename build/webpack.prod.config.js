const merge = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.base.config');

const prodConfig = merge(baseConfig, {
	devtool: 'source-map',
	stats: {
		modules: false
	},
	externals: {
		'highlight.js': {
			root: 'hljs',
			commonjs: 'highlight.js',
			commonjs2: 'highlight.js',
			amd: 'highlight.js'
		}
	}
});

const prodMinConfig = merge(prodConfig, {
	plugins: [
		new webpack.LoaderOptionsPlugin({
			minimize: true
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true
		})
	]
});

module.exports = [
	// CommonJS
	merge(prodConfig, {
		output: {
			filename: 'vue-highlight.js',
			libraryExport: 'default'
		}
	}),
	merge(prodMinConfig, {
		output: {
			filename: 'vue-highlight.min.js',
			libraryExport: 'default'
		}
	}),

	// ES Module
	merge(prodConfig, {
		output: {
			filename: 'vue-highlight.esm.js'
		}
	})
];
