<template>
	<div id="app">
		<h1>Static Code</h1>
		<div><b>Code Block:</b></div>
		<highlight-code lang="javascript">
			let map;
			function initMap() {
				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: -34.397, lng: 150.644},
					zoom: 8
				});
			}
		</highlight-code>
		<highlight-code lang="vue">
			&lt;template&gt;
				&lt;div id="app"&gt;
					&lt;!-- Code Block --&gt;
					&lt;highlight-code lang="javascript"&gt;
						let str = 'Hello, World!';
						console.log(str);
					&lt;/highlight-code&gt;

					&lt;!-- Inline Code Block --&gt;
					&lt;highlight-code lang="javascript" inline&gt;alert('Hello, World!');&lt;/highlight-code&gt;
				&lt;/div&gt;
			&lt;/template&gt;

			&lt;script&gt;
			// JavaScript...
			&lt;/script&gt;

			&lt;style&gt;
			/* StyleSheet... */
			&lt;/style&gt;
		</highlight-code>
		<hr class="divider">
		<div>
			<b>Inline Code Block:</b> <highlight-code lang="javascript" inline>console.log('Hello, World!');</highlight-code>
		</div>

		<hr class="segment-divider">

		<h1>Dynamic Code</h1>
		<div><b>Code Block:</b></div>
		<highlight-code lang="javascript" :code="blockCode"></highlight-code>
		<button type="button" @click="changeBlockCode">Change it!</button>
		<hr class="divider">
		<div>
			<b>Inline Code Block:</b> <highlight-code lang="javascript" inline :code="inlineCode"></highlight-code>
		</div>
		<button type="button" @click="changeInlineCode">Change it!</button>
	</div>
</template>

<script>
const firstBlockCode = `
	let map;
	function initMap() {
		map = new google.maps.Map(document.getElementById('map'), {
			center: {lat: -34.397, lng: 150.644},
			zoom: 8
		});
	}
`;

const secondBlockCode = `
	function initMap() {
		let myLatLng = {lat: -25.363, lng: 131.044};

		let map = new google.maps.Map(document.getElementById('map'), {
			zoom: 4,
			center: myLatLng
		});

		let marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: 'Hello World!'
		});
	}
`;

const firstInlineCode = `console.log('Hello, World!');`;
const secondInlineCode = `alert('Hello, Mars!');`;

export default {
	data() {
		return {
			blockCode: firstBlockCode,
			blockState: 0,
			inlineCode: firstInlineCode,
			inlineState: 0
		};
	},
	methods: {
		changeBlockCode() {
			if (this.blockState === 0) {
				this.blockCode = secondBlockCode;
			} else {
				this.blockCode = firstBlockCode;
			}
			this.blockState ^= 1;
		},
		changeInlineCode() {
			if (this.inlineState === 0) {
				this.inlineCode = secondInlineCode;
			} else {
				this.inlineCode = firstInlineCode;
			}
			this.inlineState ^= 1;
		}
	}
};
</script>

<style lang="css">
#app {
	margin-bottom: 5rem;
}
hr.divider {
	margin: 1em 0;
	border-color: transparent;
	border-style: solid;
}
hr.segment-divider {
	margin: 2em 0;
	border-top: 0;
	border-left: 0;
	border-right: 0;
	border-bottom: 1px solid #444;
}
</style>
