var earthquake_url = "hhttps://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonttps://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"

var myMap = L.map("mapid", {
    center: [34.0754, -84.2941],
    zoom: 2
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(myMap);

function getColor(depth) {
    var circleColor = "green";
    if (depth > 90) {
        circleColor = "red";
    }
    else if (depth > 70) {
        circleColor = "#eb5e34";
    }
    else if (depth > 50) {
        circleColor = "#eb9f34";
    }
    else if (depth > 30) {
        circleColor = "#ebd334";
    }   
    else if (depth > 10) {
        circleColor = "#e2eb34";
    }
    return circleColor;
}
d3.json(earthquake_url).then(data => {
    console.log(data);
    L.geoJSON(data, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                radius: feature.properties.mag*2,
                fillColor: getColor(feature.geometry.coordinates[2]),
                color: "black",
                weight: 1
            });
  