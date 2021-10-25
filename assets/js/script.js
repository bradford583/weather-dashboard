function initPage() {
  const cityEl = document.getElementById("enter-city");
  const searchEl = document.getElementById("search-button");
  const clearEl = document.getElementById("clear-history");
  const nameEl = document.getElementById("city-name");
  const currentPicEl = document.getElementById("current-pic");
  const currentTempEl = document.getElementById("temperature");
  const currentHumidityEl = document.getElementById("humidity");
  const currentWindEl = document.getElementById("wind-speed");
  const currentUVEl = document.getElementById("UV-index");
  const historyEl = document.getElementById("history");
  var fivedayEl = document.getElementById("fiveday-header");
  var todayweatherEl = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

  const apiKey = "000c3ebdf3a00d6f9c45d09b3723ef63";

  function getWeather(cityName) {
    //weather get request
    let queryUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios.get(queryUrl).then(function (response) {
      todayweatherEl.classList.remove("d-none");

      const currentDate = new Date(response.data.dt * 1000);
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();
      nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
      let weatherPic = response.data.weather[0].icon;
      currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
      currentPicEl.setAttribute("alt", response.data.weather[0].description);
      currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
      
    });
  }
}

initPage();
