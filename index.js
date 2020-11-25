mapboxgl.accessToken = 'pk.eyJ1Ijoibml0aXNoMTYiLCJhIjoiY2toeDV5cDc2MDB6czJxbm1mZHMwejN5biJ9.7QXCJaIVyN6y93sFfyidyQ';


navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true});

function successLocation(position){
  console.log(position);
  setUpMap([position.coords.longitude,position.coords.latitude]);
}
function errorLocation(){

}
function setUpMap(center){
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center:center,
      zoom:15
    });



    var nav = new mapboxgl.NavigationControl();
map.addControl(nav);
var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken,
});

map.addControl(directions, 'top-left');
}
