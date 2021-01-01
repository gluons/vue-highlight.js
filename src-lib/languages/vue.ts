/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
function vue(hljs: any) {
	const SCRIPT_CLOSE_REGEX = /<\/script>/;
	const STYLE_CLOSE_REGEX = /<\/style>/;

	const generateScriptOpenRegEx = (lang?: string): RegExp => {
		// Match default script.
		const DEFAULT_SCRIPT_REGEX = /<script>/;

		if (!lang) {
			return DEFAULT_SCRIPT_REGEX;
		}

		// Match script with lang.
		const scriptRegEx = new RegExp(`<script\\s+lang=['"]${lang}['"]>`);

		return scriptRegEx;
	};

	const generateStyleOpenRegEx = (lang?: string): RegExp => {
		// Match default style with `scoped` support.
		const DEFAULT_STYLE_REGEX = /<style(\s+scoped)?>/;

		if (!lang) {
			return DEFAULT_STYLE_REGEX;
		}

		// Match style with lang with `scoped` support.
		const styleRegEx = new RegExp(
			`<style\\s+lang=['"]${lang}['"](\\s+scoped)?>`
		);

		return styleRegEx;
	};

	/*
	 * Language mapping.
	 * Key is Vue language id.
	 * Value is Highlight.js language id.
	 */
	const scriptLanguages: Record<string, string> = {
		'': 'javascript',
		ts: 'typescript'
	};
	const styleLanguages: Record<string, string> = {
		'': 'css',
		scss: 'scss',
		less: 'less',
		stylus: 'stylus'
	};

	// All sub-language parts
	const subLangParts = [
		...Object.keys(scriptLanguages).map(vueLang => ({
			begin: generateScriptOpenRegEx(vueLang),
			end: SCRIPT_CLOSE_REGEX,
			subLanguage: scriptLanguages[vueLang],
			excludeBegin: true,
			excludeEnd: true
		})),
		...Object.keys(styleLanguages).map(vueLang => ({
			begin: generateStyleOpenRegEx(vueLang),
			end: STYLE_CLOSE_REGEX,
			subLanguage: styleLanguages[vueLang],
			excludeBegin: true,
			excludeEnd: true
		}))
	];

	return {
		name: 'Vue',
		subLanguage: 'xml',
		contains: [
			hljs.COMMENT(/<!--/, /-->/, {
				relevance: 10
			}),
			...subLangParts
		]
	};
}

export = vue;
