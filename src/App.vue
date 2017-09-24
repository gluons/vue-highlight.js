<template lang="pug">
#app
	github-corners(repo='gluons/vue-highlight.js')
	home
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
