/**
 * Escape code.
 *
 * @export
 * @param {string} code Code.
 * @returns {string}
 */
export default function escape(code: string): string {
	if (typeof code === 'string') {
		return code
			.replace(/&/g, '&amp;')
			.replace(/"/g, '&quot;')
			.replace(/'/g, '&apos;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;');
	} else {
		return code;
	}
}
