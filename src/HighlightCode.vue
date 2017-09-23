<script>
import * as hljs from 'highlight.js';

import { escape, getSlotText, indentCode } from '@/lib';

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
	render(createElement) {
		let hasCode = this.hasCode;
		let lang = this.lang;
		let inline = this.inline;
		let code = hasCode ? this.code : getSlotText(this.$slots.default); // If no `code`, get text from default slot.

		code = !inline ? indentCode(code) : code; // Don't indent code if in inline mode.
		let highlightedCode = lang ? hljs.highlight(lang, code).value : escape(code); // If no `lang`, just display plain code.

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
