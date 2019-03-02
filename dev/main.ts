/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';
import VueHighlightJS, { Options } from '../src';

import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from '../lib/languages/vue';

import App from './App.vue';

import 'highlight.js/styles/agate.css';

Vue.use<Options>(VueHighlightJS, {
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
