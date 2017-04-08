// Karma configuration
// Generated on Sat Apr 08 2017 21:35:11 GMT+0700 (ICT)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',


		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'jasmine-matchers'],


		// list of files / patterns to load in the browser
		files: [
			'spec/**/*[sS]pec.js'
		],


		// list of files to exclude
		exclude: [
		],


		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
			'spec/**/*[sS]pec.js': ['webpack']
		},

		webpack: {
			stats: 'minimal',
			module: {
				rules: [
					{
						test: /\.vue$/,
						loader: 'vue-loader'
					},
					{
						test: /\.js$/,
						loader: 'babel-loader',
						exclude: /node_modules/
					},
					{
						test: /\.css$/,
						use: ['style-loader', 'css-loader']
					}
				]
			}
		},

		webpackMiddleware: {
			stats: 'minimal'
		},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['spec', 'kjhtml'],

		// plugins: ['karma-jasmine', 'karma-jasmine-matchers'],

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: [
			process.env.CI ? 'Firefox' : 'FirefoxDeveloper' // Use Firefox Developer Edition on local
		],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	});
};
