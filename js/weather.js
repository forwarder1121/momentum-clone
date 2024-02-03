const API_KEY = "915c5ea9df15b97b8da634624c8a5d90";
function onGeoOk(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(
        "#weather span:first-child"
      );
      const city = document.querySelector(
        "#weather span:last-child"
      );
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main}/${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Geolocation is not supported by this browser.");
}

navigator.geolocation.getCurrentPosition(
  onGeoOk,
  onGeoError
);
