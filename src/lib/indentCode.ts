import detectIndent from 'detect-indent';
import redent from 'redent';

/**
 * Indent code.
 *
 * @export
 * @param {string} code Code.
 * @returns {string}
 */
export default function indentCode(code: string): string {
	if (typeof code === 'string') {
		let indent = detectIndent(code).indent || '\t';
		code = redent(code, 0, indent);

		return code.trim();
	} else {
		return code;
	}
}
