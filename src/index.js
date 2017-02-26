import VueHighlightJS from './highlight-code.vue';

export default {
	component: VueHighlightJS,
	install(Vue) {
		Vue.component('highlight-code', VueHighlightJS);
	}
};
