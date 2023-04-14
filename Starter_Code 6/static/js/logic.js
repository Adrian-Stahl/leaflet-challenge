function createMap(earthquakes) {
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    let basemap = {
        "World Map": streetmap
    };

    let overlayMap = {
        "Earthquakes": earthquakes
    };

    let map = L.map("map", {
        center: [25, -100],
        zoom: 4,
        layers: [streetmap, earthquakes]
    });
}