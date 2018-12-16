<script lang="ts">
import hljs from 'highlight.js';

import { escape, getSlotText, indentCode } from './lib/';

export default {
	name: 'HighlightCode',
	props: {
		lang: String,
		inline: {
			type: Boolean,
			default: false
		},
		code: String,
		auto: Boolean
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
		hasCode(): boolean {
			return (typeof this.code === 'string') && (this.code.length > 0);
		}
	},
	render(createElement) {
		const hasCode: boolean = this.hasCode;
		const inline: boolean = this.inline;
		const auto: boolean = this.auto;
		let lang: string = this.lang;
		let code: string = hasCode ? this.code : getSlotText(this.$slots.default); // If no `code`, get text from default slot.

		code = !inline ? indentCode(code) : code; // Don't indent code if in inline mode.

		let highlightedCode;
		if (auto) {
			({ language: lang, value: highlightedCode } = hljs.highlightAuto(code));
		} else {
			highlightedCode = lang ? hljs.highlight(lang, code).value : escape(code); // If no `lang`, just display plain code.
		}

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
