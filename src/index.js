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

export default {
	install
};
