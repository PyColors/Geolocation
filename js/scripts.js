const demo = document.getElementById("demo");

function error(err) {
  demo.innerHTML = `Failed to locate. Error: ${err.message}`;
}

function success(pos) {
  demo.innerHTML = "Located.";
  alert(`${pos.coords.latitude}, ${pos.coords.longitude}`);
}

function getGeolocation() {
  if (navigator.geolocation) {
    demo.innerHTML = "Locating...";
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    demo.innerHTML = "Geolocation is not supported by this browser.";
  }
}
