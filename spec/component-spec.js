import Vue from 'vue';
import HighlightCode from '@/HighlightCode.vue';

const Ctor = Vue.extend(HighlightCode);

describe('Vue Highlight.js Component', () => {
	let vm = new Ctor({
		propsData: {
			lang: 'javascript',
			code: `console.log('Hello, World!');`
		}
	}).$mount();

	describe('Component', () => {
		it(`should named 'highlight-code'`, () => {
			expect(vm.$options.name).toEqual('highlight-code');
		});
		it(`should have expected 'lang' property`, () => {
			expect(vm.$props.lang).toBeString();
			expect(vm.$props.lang).toEqual('javascript');
		});
		it(`should have expected 'inline' property`, () => {
			expect(vm.$props.inline).toBeBoolean();
			expect(vm.$props.inline).toBeFalse();
		});
		it(`should have expected 'code' property`, () => {
			expect(vm.$props.code).toBeString();
			expect(vm.$props.code).toEqual(`console.log('Hello, World!');`);
		});
		it(`should have expected content`, () => {
			expect(vm.$el.textContent).toBeString();
			expect(vm.$el.textContent).toEqual(`console.log('Hello, World!');`);
		});
		it(`content should be equal to 'code' property`, () => {
			expect(vm.$el.textContent).toEqual(vm.$props.code);
		});
	});
});
