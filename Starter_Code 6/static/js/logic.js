function createMap (terremoto){
    let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let labase = {
    "Street Map": streetmap
};
let decubierta ={
    "Earthquake details": terremoto 
};
let mapa = L.map("map", {
    center: [41, -95],
    zoom: 5,
    layers:[streetmap, terremoto]
});
}
function createMarkers(response) { 
    let terremoto = response.features;
    let temblores_ubicacion = [];
for(let i = 0; i < terremoto.length; i++){
    let temblores = terremoto[i];
    let formato1 = (255-2*Math.floor(temblores.geometry.coordinates[2])).toString(20);     
    let formato2 = "#"+formato1+"7eff"
    let radio =temblores.properties.mag * 10000;
    let marca = L.circle([temblores.geometry.coordinates[1],temblores.geometry.coordinates[0]], {
        color: "green",
        fillColor: formato2,
        fillOpacity: 1,
        radius:radio
    }).bindPopup("<h3>Location:"+temblores.properties.place+"<h3><h3>Magnitude:"+temblores.properties.mag+"<h3><h3>Depth:"+temblores.geometry.coordinates[2]+"</h3>");
    temblores_ubicacion.push(marca);
}
createMap(L.layerGroup(temblores_ubicacion));
}
url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';

d3.json(url).then(createMarkers);
