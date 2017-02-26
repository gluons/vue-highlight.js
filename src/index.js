import VueHighlightJS from './highlight-code.vue';

export default {
	install(Vue) {
		Vue.component('highlight-code', VueHighlightJS);
	}
};
