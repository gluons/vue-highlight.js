import hljs from 'highlight.js/lib/highlight';

import { HLJSLang } from '../types';

/**
 * Register Highlight.js languages.
 *
 * @export
 * @param {Record<string, HLJSLang>} languages Highlight.js languages
 */
export default function registerLanguages(
	languages: Record<string, HLJSLang>
): void {
	Object.keys(languages).forEach(languageName => {
		const language = languages[languageName];

		hljs.registerLanguage(languageName, language);
	});
}
