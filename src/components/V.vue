<template lang="pug">
span.v-char V
</template>

<script>
export default {
	name: 'V'
};
</script>

<style lang="scss">
.v-char {
	display: inline-block;
	background-image: url('../assets/logo.png');
	background-position: center bottom;
	background-size: contain;
	background-repeat: no-repeat;
	color: transparent;
	width: 40px;
	height: 40px;
	margin-right: -5px;

	&::selection {
		color: initial !important;
	}
	&::-moz-selection {
		color: initial !important;
	}
}
</style>
