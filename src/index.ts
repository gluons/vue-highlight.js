import Vue, { PluginFunction, PluginObject } from 'vue';

import HighlightCode from './components/HighlightCode';
import { requireLanguage } from './lib';

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
 * @param {Options} [options={languages: ['javascript']}] Options
 */
const install: PluginFunction<Options> = (
	vue: typeof Vue,
	options: Options = {
		languages: ['javascript']
	}
): void => {
	const { languages } = options;

	languages.forEach(language => {
		requireLanguage(language);
	});
	vue.component('highlight-code', HighlightCode);
};

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
