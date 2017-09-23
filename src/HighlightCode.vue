<script>
import * as hljs from 'highlight.js';
import * as detectIndent from 'detect-indent';
import * as redent from 'redent';

import getSlotText from '@/lib/getSlotText';

// Disable auto detect language.
hljs.configure({
	languages: []
});

export default {
	name: 'highlight-code',
	props: {
		lang: String,
		inline: {
			type: Boolean,
			default: false
		},
		code: String
	},
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
		escape(codeContent) {
			if (typeof codeContent === 'string') {
				return codeContent
					.replace(/&/g, '&amp;')
					.replace(/"/g, '&quot;')
					.replace(/'/g, '&apos;')
					.replace(/</g, '&lt;')
					.replace(/>/g, '&gt;');
			} else {
				return codeContent;
			}
		},
		indentCode(codeContent) {
			let indent = detectIndent(codeContent).indent || '\t';
			codeContent = redent(codeContent, 0, indent);

			return codeContent.trim();
		}
	},
	render(createElement) {
		let hasCode = this.hasCode;
		let lang = this.lang;
		let inline = this.inline;
		let code = hasCode ? this.code : getSlotText(this.$slots.default); // If no `code`, get text from default slot.

		code = !inline ? this.indentCode(code) : code; // Don't indent code if in inline mode.
		let highlightedCode = lang ? hljs.highlight(lang, code).value : this.escape(code); // If no `lang`, just display plain code.

		return createElement(
			!inline ? 'pre' : 'span',
			[
				createElement('code', {
					'class': [
						'hljs',
						...(lang ? [lang] : [])
					],
					style: inline ? this.inlineStyles : {},
					domProps: {
						innerHTML: highlightedCode
					}
				})
			]
		);
	}
};
</script>
