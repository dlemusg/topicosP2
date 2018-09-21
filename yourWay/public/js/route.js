$(function (req) {
  URI = '/rutas'
  $('#recorrido').on('click', () => {
    initMap();
    $.ajax({
      url: URI,
      success: function (locations) {
        locations.forEach(location =>{
          addMacker(location.latitude, location.longitude)
        });
      }
    });
  });

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
});