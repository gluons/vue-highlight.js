<script>
import hlCodeMixin from './mixins/hlCode';

export default {
	name: 'highlight-code',
	props: {
		lang: String,
		inline: {
			type: Boolean,
			default: false
		},
		code: String
	},
	mixins: [
		hlCodeMixin
	]
};
</script>
