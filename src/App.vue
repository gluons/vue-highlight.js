<template>
	<div id="app">
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

<style>
#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
