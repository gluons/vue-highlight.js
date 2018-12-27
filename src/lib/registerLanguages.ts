import hljs from 'highlight.js/lib/highlight';

import { HLJSLang } from '../types';

/**
 * Register Highlight.js languages.
 *
 * @export
 * @param {string[]} languageNames Languages name
 * @returns {Promise<void>}
 */
export default async function registerLanguages(
	languageNames: string[]
): Promise<void> {
	const languages = await Promise.all(
		languageNames.map(async languageName => {
			let language: any;

			if (languageName === 'vue') {
				language = await import(`highlight.js/lib/languages/xml`);
			} else {
				language = await import(`highlight.js/lib/languages/${languageName}`);
			}

			return {
				name: languageName,
				language: language.default
					? (language.default as HLJSLang)
					: (language as HLJSLang)
			};
		})
	);

	languages.forEach(({ name, language }) => {
		hljs.registerLanguage(name, language);
	});
}
