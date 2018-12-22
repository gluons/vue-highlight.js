import Vue, { PluginFunction, PluginObject } from 'vue';

import HighlightCode from './components/HighlightCode';
import { registerLanguage } from './lib';
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
 * @param {Options} [options={languages: ['javascript']}] Options
 */
const install: PluginFunction<Options> = (
	vue: typeof Vue,
	options: Options = { languages: {} }
): void => {
	const { languages } = options;

	// Register Highlight.js languages
	for (const languageName in languages) {
		if (!Object.prototype.hasOwnProperty.call(languages, languageName)) {
			continue;
		}

		const language = languages[languageName];
		registerLanguage(languageName, language);
	}

	// Register components
	vue.component('highlight-code', HighlightCode);
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
