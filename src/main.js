// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

Vue.config.productionTip = false;

import 'highlight.js/styles/agate.css';
Vue.use(VueHighlightJS);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
