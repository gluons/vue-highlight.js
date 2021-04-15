import hljs from 'highlight.js/lib/core';

import { LanguageFn } from '../types';

/**
 * Register Highlight.js languages.
 *
 * @export
 * @param {Record<string, LanguageFn>} languages Highlight.js languages
 */
export default function registerLanguages(
	languages: Record<string, LanguageFn>
): void {
	if (typeof languages !== 'object') {
		return;
	}

	Object.keys(languages).forEach(languageName => {
		const language = languages[languageName];

		hljs.registerLanguage(languageName, language);
	});
}
