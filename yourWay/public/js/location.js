//variables
var guardadoCache = 0;
var cache = [{},{},{},{},{}]
const URI = '/users/location';
var init = false;
var ciclo;
var lat = 0;
var lon = 0;
$(function () {
  function initMap() {
    var options = {
        zoom: 8,
        center: new google.maps.LatLng(6.27053, -75.57211999999998)
    }
    //new map
    map = new google.maps.Map(document.getElementById('map'), options);
  }
  function addMacker(a, b) {
    var coor = new google.maps.LatLng(a, b)
    var marker = new google.maps.Marker({
        position: coor,
        map: map
    })
  }
  initMap();
  $('#iniciar').on('click', () => {
    iniciar();
    console.log(guardadoCache);
  });

  $('#parar').on('click', () => {
    parar();
  });

  $('#form').on('submit', (e) => {
    e.preventDefault();
    getLocation();
    let latitud = document.form.latitude.value; 
    let longitud = document.form.longitude.value;
    var Dlatitud = parseFloat(latitud) - parseFloat(lat);
    var Dlongitud = parseFloat(longitud) - parseFloat(lon);
    if(latitud != ""){
      if(Dlatitud != 0 || Dlongitud != 0){
        if(guardadoCache < 5){
          guardarEnCache(latitud,longitud);
          guardadoCache += 1;
        }
        else{
          guardarBD();
        }
        lat = latitude.value;
        lon = longitude.value;
      }
    }
  });
  function guardarBD(){
    $.ajax({
      url: URI,
      method: 'POST',
      data: {
        latitude: 0,
        longitude: 0,
        cach0la: cache[0].latitud,
        cach0lo: cache[0].longitud,
        cach1la: cache[1].latitud,
        cach1lo: cache[1].longitud,
        cach2la: cache[2].latitud,
        cach2lo: cache[2].longitud,
        cach3la: cache[3].latitud,
        cach3lo: cache[3].longitud,
        cach4la: cache[4].latitud,
        cach4lo: cache[4].longitud,
      },
      success: function() {
        guardadoCache = 0;
      },
      error: function (err) {
        console.log(err);
      }
    });
  }
  function guardarEnCache(latitud,longitud){
    cache[guardadoCache] = {latitud,longitud}
    addMacker(latitud,longitud);
  }
  function intervalo(){
    if(init == true){
      $('#prueba').click();
    }
    else{
      clearInterval(ciclo);
    }
  }
  function iniciar() {
    init = true;
    ciclo = setInterval(intervalo, 1000);
    document.getElementById("iniciar").disabled = true;
    document.getElementById("parar").disabled = false;
    getLocation();
  }
  function parar() {
    init = false;
    document.getElementById("iniciar").disabled = false;
    document.getElementById("parar").disabled = true;
    guardarBD();
  }
  function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  function showPosition(position) {
      var x = document.getElementById("demo");
      x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
      document.getElementById("latitude").value = position.coords.latitude;
      document.getElementById("longitude").value = position.coords.longitude;
  }
});
