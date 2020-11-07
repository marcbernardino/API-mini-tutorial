var onOff = 0;
function getPosition() {
    //checks to see if the browser support geo location (w3schools)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(mapPosition);
    } else {
        canvas.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function mapPosition(position) {
    var coordsArray = [position.coords.latitude, position.coords.longitude];
    //Creates the map object with the intended coordinates and sets zoom level to 14
    var map = L.map('map').setView(coordsArray, 14);
    //Creates the required WebGL metadata and chains it to the map object
    var gl = L.mapboxGL({attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',accessToken: 'not-needed', style: 'https://api.maptiler.com/maps/streets/style.json?key=qZjWTwtNTmBxDi3ZpTB5'}).addTo(map);
    //Creates the marker for the intended coordinates and chains it to the map object 
    var marker = L.marker(coordsArray).addTo(map);
}

function changeColor() {
    
    if (onOff == 0){
        $('#emptySpce').css('background-color', 'blue');
        onOff = 1;
    } 
}

function changeBack() {
     if (onOff == 1){
        $('#emptySpce').css('background-color', 'bisque');
         onOff = 0;
    }
}