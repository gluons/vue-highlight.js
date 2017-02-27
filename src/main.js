// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import App from './App';

import * as components from './components';

Vue.config.productionTip = false;

// Styles
import 'highlight.js/styles/monokai.css';
import './scss/main.scss';

// Plugins
Vue.use(VueHighlightJS);

// Components
Object.keys(components).forEach(key => {
	Vue.component(key, components[key]);
});

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App }
});
