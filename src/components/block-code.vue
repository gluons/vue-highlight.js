<template lang="html">
	<pre v-if="hasCode"><code ref="code-elm" :class="lang">{{ code }}</code></pre>
	<pre v-else><code ref="code-elm" :class="lang"><slot></slot></code></pre>
</template>

<script>
import hljs from 'highlight.js';

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
