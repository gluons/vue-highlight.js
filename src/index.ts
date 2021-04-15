/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import Vue, { PluginFunction, PluginObject } from 'vue';

import HighlightCode from './components/HighlightCode';
import { registerLanguages } from './lib';
import { LanguageFn } from './types';

import hljsVue from '../lib/languages/vue';

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
	// Prevent error in Vue 3
	if (!vue.component) {
		return;
	}

	const { languages } = options;

	if (IS_WEB_BUNDLE) {
		window.hljs.registerLanguage('vue', hljsVue);
	} else {
		// Register languages from options in non-web bundle
		/*
		 * `Record<string, LanguageFn>` is for fixing build error.
		 */
		registerLanguages(languages as Record<string, LanguageFn>);
	}
	vue.component('HighlightCode', HighlightCode);
};

if (typeof window !== 'undefined' && window.Vue) {
	install(window.Vue);
}

export default {
	install
} as PluginObject<Options>;
