import HighlightCode from './HighlightCode';

import './languages';

/**
 * Install Vue Highlight.js as plugin.
 *
 * @param {Vue} Vue
 */
function install(Vue) {
	Vue.component('highlight-code', HighlightCode);
}

if ((typeof window !== 'undefined') && window.Vue) {
	install(window.Vue);
}

export default {
	install
};
