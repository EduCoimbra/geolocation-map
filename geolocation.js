const x = document.getElementById("btn");

function getGeolocation(){
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition, showError)
  } else {
    x.innerHTML = "Your browser does nor support geolocation."
  }
}

function showPosition(position) {
  let latlon = position.coords.latitude + "," + position.coords.longitude;

  let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=12&size=400x400&key=AIzaSyAlzKb21zjutOU-9bCNDJM6UbV9Cw5GNIg";


  document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
}

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      x.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      x.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      x.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      x.innerHTML = "An unknown error occurred."
      break;
  }
}
