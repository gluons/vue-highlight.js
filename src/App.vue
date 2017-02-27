<template>
	<div id="app">
		<block-code></block-code>
		<inline-code></inline-code>
	</div>
</template>

<script>
import * as components from './components';

export default {
	name: 'app',
	components
};
</script>

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
