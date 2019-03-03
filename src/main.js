import Vue from 'vue';
import VueHighlightJS from 'vue-highlight.js';
import VueGitHubButtons from 'vue-github-buttons';
import VueGitHubCorners from 'vue-gh-corners';
import VueCodeMirror from 'vue-codemirror';

import css from 'highlight.js/lib/languages/css';
import javascript from 'highlight.js/lib/languages/javascript';
import vue from 'vue-highlight.js/lib/languages/vue';

import App from './App';
import components from './components';

import 'codemirror/mode/javascript/javascript';

// Styles
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'highlight.js/styles/monokai.css';
import 'vue-github-buttons/dist/vue-github-buttons.css';
import 'vue-gh-corners/dist/vue-github-corners.iife';
import './scss/main.scss';

Vue.config.productionTip = false;

// Plugins
Vue.use(VueHighlightJS, {
	languages: {
		css,
		javascript,
		vue
	}
});
Vue.use(VueGitHubButtons);
Vue.use(VueGitHubCorners);
Vue.use(VueCodeMirror);

// Components
Object.keys(components).forEach(key => {
	Vue.component(key, components[key]);
});

new Vue({
	el: '#app',
	render: h => h(App)
});
