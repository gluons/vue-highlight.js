import { createLocalVue, mount } from '@vue/test-utils';
import javascript from 'highlight.js/lib/languages/javascript';

import VueHighlightJS from '../src';
import HighlightCode from '../src/components/HighlightCode';

const localVue = createLocalVue();

localVue.use(VueHighlightJS, {
	languages: {
		javascript
	}
});

describe('HighlightCode component', () => {
	const wrapper = mount(HighlightCode, {
		propsData: {
			lang: 'javascript',
			code: `console.log('Hello, World!');`
		}
	});

	it(`should have expected 'lang' property`, () => {
		expect(typeof wrapper.props('lang')).toBe('string');
		expect(wrapper.props('lang')).toEqual('javascript');
	});
	it(`should have expected 'inline' property`, () => {
		expect(typeof wrapper.props('inline')).toBe('boolean');
		expect(wrapper.props('inline')).toEqual(false);
	});
	it(`should have expected 'code' property`, () => {
		expect(typeof wrapper.props('code')).toBe('string');
		expect(wrapper.props('code')).toEqual(`console.log('Hello, World!');`);
	});
	it(`should have expected content`, () => {
		expect(typeof wrapper.text()).toBe('string');
		expect(wrapper.text()).toEqual(`console.log('Hello, World!');`);
	});
	it(`content should be equal to 'code' property`, () => {
		expect(wrapper.text()).toEqual(wrapper.props('code'));
	});
});
