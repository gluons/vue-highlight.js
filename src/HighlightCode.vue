<template lang="html">
	<block-code v-if="!inline" :lang="lang" :code="code"><slot></slot></block-code>
	<inline-code v-else :lang="lang" :code="code"><slot></slot></inline-code>
</template>

<script>
import BlockCode from './components/BlockCode';
import InlineCode from './components/InlineCode';

export default {
	name: 'highlight-code',
	components: {
		BlockCode,
		InlineCode
	},
	props: {
		lang: String,
		inline: {
			type: Boolean,
			default: false
		},
		code: String
	}
};
</script>
