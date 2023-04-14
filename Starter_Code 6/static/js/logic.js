function createMap (terremoto)
{let calle = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let labase = {
    "Mapa Mundis": calle
};
let decubierta ={
    "Earthquake details": terremoto 
};
let mapa = L.map("mapa", {
    center: [40.7, -94.5],
    zoom: 5,
    layers:[calle, terremoto]
});

}