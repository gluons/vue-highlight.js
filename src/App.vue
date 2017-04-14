<template>
	<div id="app">
		<github-corner url="https://github.com/gluons/vue-highlight.js"></github-corner>
		<home></home>
	</div>
</template>

<script>
import * as views from './views';

export default {
	name: 'app',
	components: {
		...views
	}
};
</script>
