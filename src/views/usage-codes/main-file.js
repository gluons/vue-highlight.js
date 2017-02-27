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
