import Vue from 'vue';

declare global {
	const IS_WEB_BUNDLE: boolean;

	interface Window {
		Vue: typeof Vue;
	}
}
