<template lang="html">
	<pre v-if="hasCode"><code ref="code-elm" :class="lang">{{ code }}</code></pre>
	<pre v-else><code ref="code-elm" :class="lang"><slot></slot></code></pre>
</template>

<script>
import hljs from 'highlight.js';
import detectIndent from 'detect-indent';
import redent from 'redent';

hljs.configure({
	languages: []
});

export default {
	name: 'block-code',
	props: {
		lang: String,
		code: String
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
		},
		init() {
			let codeElm = this.$refs['code-elm'];
			if (this.hasCode) {
				codeElm.textContent = this.indentCode(this.code);
			} else {
				codeElm.textContent = this.indentCode(codeElm.textContent);
			}
			hljs.highlightBlock(codeElm);
		}
	},
	mounted() {
		this.init();
	},
	updated() {
		this.init();
	}
};
</script>
