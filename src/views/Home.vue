<template lang="pug">
#home
	h1 Vue Highlight.js
	p 📜 Highlight.js syntax highlighter component for Vue.
	hr.divider
	#installation-container
		h2 Installation
		.code-block
			highlight-code npm install vue-highlight.js
</template>

<script>
export default {};
</script>

<style lang="scss">
#home {
	text-align: center;

	#installation-container {
		.code-block {
			margin: 0 auto;
			max-width: 50%;
		}
	}

	/*
	 * Credit: CSS Tricks
	 * https://css-tricks.com/examples/hrs/
	 */
	hr.divider {
		padding: 0;
		border: none;
		border-top: medium double #333;
		color: #333;
		text-align: center;
		max-height: 0;
		margin: 2em 0;

		&::after {
			content: '§';
			display: inline-block;
			position: relative;
			top: -0.7em;
			font-size: 1.5em;
			padding: 0 0.25em;
			background: white;
		}
	}
}
</style>
