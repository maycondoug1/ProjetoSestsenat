let map;

function initMap() {
  const directionsService = new google.maps.DirectionsService();
  const directionsRenderer = new google.maps.DirectionsRenderer({
    map: map,
    polylineOptions: {
        strokeColor: "#black"
    }
    
});
  
  map = new google.maps.Map(document.getElementById("map"), {

    center: { lat: -12.6103634, lng: -38.3040989 },
    zoom: 14,
    disableDefaultUI: true,
    gestureHandling: "None",
  });

  directionsRenderer.setMap(map);

  const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };
  document.getElementById("prt").addEventListener("change", onChangeHandler);
  document.getElementById("cgd").addEventListener("change", onChangeHandler);
} 
function calculateAndDisplayRoute(directionsService, directionsRenderer) {

  directionsService
    .route({
      origin: {
        query: document.getElementById("prt").value,
      },
      destination: {
        query: document.getElementById("cgd").value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    });

  const route = response.routes[0];
}

function mudar(){
  let chegada = document.getElementById('prt')
  let fim = document.getElementById('cgd')
  var tempo = document.getElementById('aa')
  var tarifa = document.getElementById('ab')
  var tela = window.screen.width;

  if(chegada.value != 'none' & fim.value != 'none'){
    tarifa.innerHTML = "Tarifas"
    tempo.innerHTML = "R$3,80 para viagens únicas <br> R$5,40 para duas viagens em um intervalo de 2 hroas <br> R$7,00 para 3 viagens em um intervalo de 2 horas"
    if(tela <= 600){
      window.scroll(0,1200)
    }
  }
}