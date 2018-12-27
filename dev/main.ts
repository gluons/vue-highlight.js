/// <reference path='../src/sfc.d.ts' />

import Vue from 'vue';
import VueHighlightJS, { Options } from '../src';

import App from './App.vue';

import 'highlight.js/styles/agate.css';

Vue.use<Options>(VueHighlightJS, {
	languages: ['javascript', 'vue']
});

new Vue({
	el: '#app',
	render: h => h(App)
});
