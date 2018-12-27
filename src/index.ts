import Vue, { PluginFunction, PluginObject } from 'vue';

import HighlightCode from './components/HighlightCode';
import { registerLanguages } from './lib';
import { HLJSLang } from './types';

export { HLJSLang };

/**
 * Vue Highlight.js options.
 *
 * @export
 * @interface Options
 */
export interface Options {
	/**
	 * Highlight.js languages
	 *
	 * @type {string[]}
	 * @memberof Options
	 */
	languages?: string[];
}

/**
 * Install Vue Highlight.js as plugin.
 *
 * @param {typeof Vue} vue Vue
 * @param {Options} [options={ languages: {} }] Options
 */
const install: PluginFunction<Options> = (
	vue: typeof Vue,
	options: Options = { languages: ['javascript'] }
): void => {
	if (!IS_WEB_BUNDLE) {
		const { languages } = options;

		vue.component('highlight-code', async () => {
			await registerLanguages(languages);

			return HighlightCode;
		});
	} else {
		vue.component('highlight-code', HighlightCode);
	}
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
