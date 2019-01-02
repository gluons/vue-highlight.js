import { HLJSStatic, IModeBase } from 'highlight.js';

/**
 * Highlight.js language
 */
type HLJSLang = (hljs?: HLJSStatic) => IModeBase;

export default HLJSLang;
