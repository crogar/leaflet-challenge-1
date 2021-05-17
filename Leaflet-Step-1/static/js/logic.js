var earthquake_url = "hhttps://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojsonttps://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php"

var myMap = L.map("mapid", {
    center: [34.0754, -84.2941],
    zoom: 2
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {