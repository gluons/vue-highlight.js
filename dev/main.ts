/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';
import VueHighlightJS from '../src';

import App from './App.vue';

import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/agate.css';

Vue.use(VueHighlightJS, {
	languages: {
		javascript,
		vue
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
});
