<template lang="html">
	<span v-if="hasCode"><code ref="code-elm" :class="lang" :style="codeStyles">{{ code }}</code></span>
	<span v-else><code ref="code-elm" :class="lang" :style="codeStyles"><slot></slot></code></span>
</template>

<script>
import hljs from 'highlight.js';

hljs.configure({
	languages: []
});

export default {
	name: 'inline-code',
	props: {
		lang: String,
		code: String
	},
	data() {
		return {
			codeStyles: {
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
		init() {
			let codeElm = this.$refs['code-elm'];
			if (this.hasCode) {
				codeElm.textContent = this.code;
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
