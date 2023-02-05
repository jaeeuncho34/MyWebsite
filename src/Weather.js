const API = "c2ac8b2ae0953940621e10ad4cfb13b7";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#city");
      weather.innerText = `${data.weather[0].main}, ${data.main.temp} C`;
      city.innerText = `You're in ${data.name}`;
      const iconCode = data.weather[0].icon;
      const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
      const icon = document.querySelector("#weather img");
      icon.src = iconUrl;
    });
}
function onGeoErr() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoErr);
