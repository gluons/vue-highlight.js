<template lang="html">
	<pre v-if="!inline"><code ref="code" :class="lang"><slot></slot></code></pre>
	<span v-else><code ref="inline-code" :class="lang" :style="inlineCodeStyles"><slot></slot></code></span>
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
	data() {
		return {
			inlineCodeStyles: {
				'display': `inline !important`,
				'vertical-align': `middle`
			}
		};
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
