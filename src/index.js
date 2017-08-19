import HighlightCode from './HighlightCode';

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
