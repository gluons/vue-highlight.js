import { Configuration } from '@gluons/vue-up';
import { resolve } from 'path';

const config: Configuration = {
	entry: resolve(__dirname, './src/index.ts'),
	libraryName: 'VueHighlightJS',
	fileName: 'vue-highlight',
	dev: {
		entry: resolve(__dirname, './dev/main.ts'),
		htmlTitle: 'Vue Highlight.js'
	}
};

export default config;
