const apiKey = "000c3ebdf3a00d6f9c45d09b3723ef63";

function getWeather(cityName) {
    //weather get request
    let queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKe;
    axios.get(queryUrl)
        .then(function(response) {
            todayweatherEl.classList.remove("d-none");
        })
}