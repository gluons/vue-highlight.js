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
	 * @type {Record<string, HLJSLang>}
	 * @memberof Options
	 */
	languages?: Record<string, HLJSLang>;
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

	registerLanguages(languages);
	vue.component('highlight-code', HighlightCode);
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
