/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';
import VueHighlightJS from '../src';

import App from './App.vue';

import 'highlight.js/styles/agate.css';

Vue.use(VueHighlightJS, {
	languages: [
		'javascript',
		'vue'
	]
});

new Vue({
	el: '#app',
	render: h => h(App)
});
