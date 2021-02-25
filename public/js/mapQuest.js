function initMap() {
	L.mapquest.key = $(map);

	// 'map' refers to a <div> element with the ID map
	L.mapquest.map('map', {
	center: [32.8776514, -117.240044],
	layers: L.mapquest.tileLayer('map'),
	zoom: 12,
	zoomControl: false
	});

	L.marker([32.8776514, -117.240044]).addTo(map);
}