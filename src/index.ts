import Vue from 'vue';

import HighlightCode from './components/HighlightCode';

import './languages';

/**
 * Install Vue Highlight.js as plugin.
 */
function install(vue: typeof Vue): void {
	vue.component('highlight-code', HighlightCode);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
