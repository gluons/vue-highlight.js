import Vue from 'vue';
import VueHighlightJS from '../src/index';

import App from './App.vue';

import 'highlight.js/styles/agate.css';

Vue.use(VueHighlightJS);

new Vue({
	el: '#app',
	render: h => h(App)
});
