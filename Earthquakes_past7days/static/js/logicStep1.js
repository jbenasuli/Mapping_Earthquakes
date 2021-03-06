console.log('working');

// create streets layer
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create satellite streets layer
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//       attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//       maxZoom: 18,
//       accessToken: API_KEY
//   });

// Create a base layer that holds both maps.
let baseMaps = {
    'Streets': streets,
    'Satellite': satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
})

// // Pass our map layers into our layers control and add the layers control to the map.
// L.control.layers(baseMaps).addTo(map);

// // Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = 'https://raw.githubusercontent.com/jbenasuli/Mapping_Earthquakes/main/torontoNeighborhoods.json';

// // Create a style for the lines.
// let myStyle = {
//   color: '#1100ff',
//   weight: 1,
//   fillColor: '#ffff00',
// }

// Grabbing our GeoJSON data.
d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then(function(data) {
  console.log(data);
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJson(data).addTo(map);
});
  
//   L.geoJson(data, {
//       style: myStyle,
//       onEachFeature: function(feature, layer) {
//         layer.bindPopup('<h3> Neighborhood: ' + feature.properties.AREA_NAME + '</h3>');
//       }
//     })
//     .addTo(map)
// });
