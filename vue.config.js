module.exports = {
	publicPath:
		process.env.NODE_ENV === 'production' ? '/vue-highlight.js/' : '/',
	chainWebpack(config) {
		config.module
			.rule('mjs')
			.test(/\.mjs$/)
			.type('javascript/auto');
	}
};
