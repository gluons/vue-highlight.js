<template lang="pug">
#home
	header
		h1 Vue Highlight.js
		p #[span.emoji 📜] #[a(href="https://github.com/isagalaev/highlight.js", target="_blank") Highlight.js] syntax highlighter component for #[a(href="https://vuejs.org", target="_blank") Vue].
	hr.divider
	main
		h2 Usage & Demo
		h3 Main File:
		highlight-code(lang="javascript")
			include ./usage-codes/main-file.js
		hr.gap.dash
		h3 Normal Code Block:
		// Highlight.js haven't supported Vue yet.
		highlight-code(lang="html")
			include:escape-html ./usage-codes/normal-code-block.vue
		p.result
		highlight-code(lang="javascript").
			var map;
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: -34.397, lng: 150.644},
					zoom: 8
				});
			}
		blockquote Sample code is taken from #[a(href="https://developers.google.com/maps/documentation/javascript/examples/map-simple", target="_blank") Simple Map | Google Maps JavaScript API]
		hr.gap.dash
		h3 Inline Code Block:
		highlight-code(lang="html")
			include:escape-html ./usage-codes/inline-code-block.vue
		p.result
		p
			| Say #[highlight-code(lang="javascript", :inline="true") console.log('Hello, World!');].
	footer
		div Made by #[a(href="https://github.com/gluons", target="_blank") Saran Tanpituckpong]
		div(style="margin-top: .5em;")
			a(href="https://github.com/gluons/vue-highlight.js/tree/docs", target="_blank") View Source
</template>

<script>
export default {};
</script>

<style lang="scss">
#home {
	header, footer {
		text-align: center;
	}
	footer {
		font-size: .9em;
		margin-top: 3.5em;
	}
	main {
		max-width: 80%;
		margin: 0 auto;

		@media (max-width: 768px) {
			max-width: 100% !important;
		}
	}
	p.result:before {
		content: 'Result:';
		font-weight: bold;
	}
}
</style>
