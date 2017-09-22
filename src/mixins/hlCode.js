import * as hljs from 'highlight.js';
import * as detectIndent from 'detect-indent';
import * as redent from 'redent';

import getSlotText from '@/lib/getSlotText';

// Disable auto detect language.
hljs.configure({
	languages: []
});

export default {
	data() {
		return {
			inlineStyles: {
				'display': `inline !important`,
				'vertical-align': `middle`
			}
		};
	},
	computed: {
		hasCode() {
			return (typeof this.code === 'string') && (this.code.length > 0);
		}
	},
	methods: {
		indentCode(codeContent) {
			let indent = detectIndent(codeContent).indent || '\t';
			codeContent = redent(codeContent, 0, indent);

			return codeContent.trim();
		}
	},
	render(createElement) {
		let lang = this.lang;
		let inline = this.inline;

		// If has `code`, use `code`. Otherwise, use `slot`.
		let code = this.hasCode ? this.code : getSlotText(this.$slots.default);

		// Indent code if in block component.
		if (!inline) {
			code = this.indentCode(code);
		}

		// If no `lang`, just display plain code.
		let highlightedCode = lang ? hljs.highlight(lang, code).value : code;

		return createElement('pre', [
			createElement('code', {
				'class': [
					'hljs',
					this.lang
				],
				style: inline ? this.inlineStyles : {},
				domProps: {
					innerHTML: highlightedCode
				}
			}, this.$slots.default)
		]);
	}
};
