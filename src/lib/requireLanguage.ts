import hljs from 'highlight.js/lib/highlight';

/**
 * Require and register Highlight.js language.
 *
 * @export
 * @param {string} lang Highlight.js language
 */
export default function requireLanguage(lang: string): void {
	if (lang === 'vue') {
		hljs.registerLanguage(
			lang,
			require('highlight.js/lib/languages/xml')
		);

		return;
	}

	hljs.registerLanguage(
		lang,
		require(`highlight.js/lib/languages/${lang}`)
	);
}
