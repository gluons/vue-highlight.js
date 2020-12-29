import Vue, { PluginFunction, PluginObject } from 'vue';

import HighlightCode from './components/HighlightCode';
import { registerLanguages } from './lib';
import { LanguageFn } from './types';

export { LanguageFn };

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
	 * @type {Record<string, LanguageFn>}
	 * @memberof Options
	 */
	languages?: Record<string, LanguageFn>;
}

/**
 * Install Vue Highlight.js as plugin.
 *
 * @param {typeof Vue} vue Vue
 * @param {Options} [options={ languages: {} }] Options
 */
const install: PluginFunction<Options> = (
	vue: typeof Vue,
	options: Options = { languages: {} }
): void => {
	const { languages } = options;

	if (IS_WEB_BUNDLE) {
		// Register additional `vue` language from highlight.js `xml` in web bundle
		const xml = window.hljs.getLanguage('xml');

		if (xml) {
			window.hljs.registerLanguage('vue', () => xml);
		}
	} else {
		// Register languages from options in non-web bundle
		languages && registerLanguages(languages);
	}
	vue.component('highlight-code', HighlightCode);
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
