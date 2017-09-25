<template lang="pug">
#usage
	h2 Usage
	h3 Main File:
	highlight-code(lang='javascript').
		import Vue from 'vue';
		import VueHighlightJS from 'vue-highlight.js';
		import App from './App';

		/*
		 * Use Vue Highlight.js
		 */
		Vue.use(VueHighlightJS);

		/*
		 * Import Highlight.js theme
		 * Find more: https://highlightjs.org/static/demo/
		 */
		import 'highlight.js/styles/default.css';

		new Vue({
			el: '#app',
			render: h => h(App)
		});
	h3 Vue File:
	highlight-code(lang='vue', :code='vueFileContent')
</template>

<script>
/* eslint-disable no-useless-escape */
const vueFileContent = `
<template>
	<div id="app">
		<!-- Code Block -->
		<highlight-code lang="javascript">
			let str = 'Hello, World!';
			console.log(str);
		</highlight-code>

		<!-- Inline Code Block -->
		<highlight-code lang="javascript" inline>alert('Hello, World!');</highlight-code>
	</div>
</template>

<script>
// JavaScript...
<\/script>

<style>
/* StyleSheet... */
</style>
`;
/* eslint-enable no-useless-escape */

export default {
	name: 'usage',
	data() {
		return {
			vueFileContent
		};
	}
};
</script>
