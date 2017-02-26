<template lang="html">
	<pre class="highlight-code" v-if="!inline"><code ref="code" :class="lang"><slot></slot></code></pre>
	<span class="highlight-code inline" v-else><code ref="inline-code" :class="lang"><slot></slot></code></span>
</template>

<script>
import hljs from 'highlight.js';

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
		}
	},
	methods: {
		init() {
			let code = !this.inline ? this.$refs['code'] : this.$refs['inline-code'];
			hljs.highlightBlock(code);
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

<style lang="css">
.highlight-code.inline .hljs {
	display: inline-block !important;
	vertical-align: middle;
}
</style>
