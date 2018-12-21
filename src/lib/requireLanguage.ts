import evl from 'evl';
import hljs from 'highlight.js/lib/highlight';

/**
 * Require and register Highlight.js language.
 *
 * @export
 * @param {string} lang Highlight.js language
 */
export default function requireLanguage(lang: string): void {
	const hljsLang = evl(
		() => require(`highlight.js/lib/languages/${lang}`),
		() => require(`../languages/${lang}`).default
	);

	hljs.registerLanguage(lang, hljsLang);
}
