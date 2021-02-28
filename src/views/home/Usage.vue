<template lang="pug">
#usage
	h2 Usage
	h3 Main File:
	highlight-code(lang='javascript' :code='mainFileContent')
	h3 Vue File:
	highlight-code(lang='vue' :code='vueFileContent')
</template>

<script>
/* eslint-disable no-useless-escape */

const mainFileContent = `
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

// Highlight.js languages (Only required languages)
import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

/*
 * Import Highlight.js theme
 * Find more: https://highlightjs.org/static/demo/
 */
import 'highlight.js/styles/default.css';

/*
 * Use Vue Highlight.js
 */
Vue.use(VueHighlightJS, {
	// Register only languages that you want
	languages: {
		css,
		javascript,
		vue
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
});
`;

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
	name: 'Usage',
	data() {
		return {
			mainFileContent,
			vueFileContent
		};
	}
};
</script>
