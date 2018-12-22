import hljs from 'highlight.js/lib/highlight';

import HLJSLang from '../types/HLJSLang';

/**
 * Register Highlight.js language
 *
 * @export
 * @param {string} languageName Language name
 * @param {HLJSLang} language Highlight.js language definition function
 */
export default function registerLanguage(
	languageName: string,
	language: HLJSLang
): void {
	hljs.registerLanguage(languageName, language);
}
