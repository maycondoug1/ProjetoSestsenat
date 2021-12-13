let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -12.6103634, lng: -38.3040989 },
    zoom: 16,
    disableDefaultUI: true,
    gestureHandling: "None",
  });
}
