<template>
	<div id="app">
		<div><b>Code Block:</b></div>
		<highlight-code lang="javascript">let map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: -34.397, lng: 150.644},
		zoom: 8
	});
}</highlight-code>
		<hr class="divider">
		<div>
			<b>Inline Code Block:</b> <highlight-code lang="javascript" :inline="true">console.log('Hello, World!');</highlight-code>
		</div>
	</div>
</template>

<style lang="css">
hr.divider {
	margin: 1em 0;
	border-color: transparent;
	border-style: solid;
}
</style>
