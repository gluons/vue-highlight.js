<template lang="pug">
#demo
	h2 Demo & Playground
	h3 Code:
	codemirror(v-model='code', :options='editorOptions')
	button.reset-btn(type='button', @click='resetCode') Reset
	h3 Result:
	highlight-code(v-if='!!code', lang='javascript', :code='code')
	div(v-else) No Result
</template>


<script>
const defaultCode = `
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
`.trim();

export default {
	name: 'demo',
	data() {
		return {
			code: defaultCode,
			editorOptions: {
				mode: 'text/javascript',
				theme: 'dracula',
				lineNumbers: true
			}
		};
	},
	methods: {
		resetCode() {
			this.code = defaultCode;
		}
	}
};
</script>

<style>
button.reset-btn {
	margin-top: 1em;
}
</style>
