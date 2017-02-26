const VueHighlightJS = require('../dist/vue-highlight');

describe('Vue Highlight.js Component', () => {
	describe('Component', () => {
		let component = VueHighlightJS.component;
		it(`should named 'highlight-code'`, () => {
			expect(component.name).toEqual('highlight-code');
		});
		it('should has `inlineCodeStyles` in `data`', () => {
			let data = component.data();
			expect(data).toBeObject();
			expect(data.inlineCodeStyles).toBeObject();
			expect(data.inlineCodeStyles['display']).toEqual('inline-block !important');
			expect(data.inlineCodeStyles['vertical-align']).toEqual('middle');
		});
		it('should has `lang` property', () => {
			expect(component.props.lang).toEqual(String);
		});
		it('should has `inline` property', () => {
			expect(component.props.inline).toBeObject();
			expect(component.props.inline.type).toEqual(Boolean);
			expect(component.props.inline.default).toBeFalse();
		});
		it('should has `init` method', () => {
			expect(component.methods.init).toBeFunction();
		});
	});
	describe('Main Plugin', () => {
		it('should has `install` function', () => {
			expect(VueHighlightJS.install).toBeFunction();
		});
	});
});
