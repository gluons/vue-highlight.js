<template lang="pug">
#home
	header
		h1 #[v]ue Highlight.js
		p #[span.emoji 📜] #[a(href="https://highlightjs.org", target="_blank") Highlight.js] syntax highlighter component for #[a(href="https://vuejs.org", target="_blank") Vue].
		p.repo-buttons-container
			gh-btns-star(slug='gluons/vue-highlight.js')
			gh-btns-fork(slug='gluons/vue-highlight.js')
	hr.divider
	main
		usage
		hr.gap.dash
		demo
	footer
		div Made by #[a(href="https://github.com/gluons", target="_blank") Saran Tanpituckpong]
		div(style="margin-top: .5em;")
			a(href="https://github.com/gluons/vue-highlight.js/tree/docs", target="_blank") View Source
</template>

<script>
import Usage from './home/Usage.vue';
import Demo from './home/Demo.vue';

export default {
	name: 'Home',
	components: {
		Usage,
		Demo
	}
};
</script>

<style lang="scss">
#home {
	header,
	footer {
		text-align: center;
	}
	footer {
		font-size: 0.9em;
		margin-top: 3.5em;
	}
	main {
		max-width: 80%;
		margin: 0 auto;

		@media (max-width: 768px) {
			max-width: 100% !important;
		}
	}
	p.result:before {
		content: 'Result:';
		font-weight: bold;
	}
	.repo-buttons-container {
		.gh-button-container {
			margin: 0 1em !important;
		}
	}
}
</style>
