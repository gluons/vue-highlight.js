import { StandardPropertiesHyphen } from 'csstype';
import hljs from 'highlight.js';
import { CreateElement, VNode } from 'Vue';
import { Component, Prop, Vue } from 'vue-property-decorator';

import { escape, getSlotText, indentCode } from '../lib';

const inlineStyles: StandardPropertiesHyphen = {
	display: 'inline !important',
	'vertical-align': 'middle'
};

@Component({
	name: 'HighlightCode'
})
export default class HighlightCode extends Vue {
	@Prop(String) lang: string;
	@Prop({ type: Boolean, default: false }) inline!: boolean;
	@Prop(String) code: string;
	@Prop(Boolean) auto: boolean;

	get hasCode(): boolean {
		return (typeof this.code === 'string') && (this.code.length > 0);
	}

	render(h: CreateElement): VNode {
		const { hasCode, inline, auto } = this;

		let lang = this.lang;
		let code = hasCode ? this.code : getSlotText(this.$slots.default); // If no `code`, get text from default slot.

		// Indent code if not use inline mode.
		if (!inline) {
			code = indentCode(code);
		}

		let highlightedCode: string;
		if (auto) {
			({ language: lang, value: highlightedCode } = hljs.highlightAuto(code));
		} else {
			highlightedCode = lang ? hljs.highlight(lang, code).value : escape(code); // If no `lang`, just display plain code.
		}

		return h(
			!inline ? 'pre' : 'span',
			[
				h('code', {
					class: [
						'hljs',
						...(lang ? [lang] : [])
					],
					style: inline ? inlineStyles : {},
					domProps: {
						innerHTML: highlightedCode
					}
				})
			]
		);
	}
}
