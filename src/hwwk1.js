function currentWeather(event){
function showPosition(position){
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    
    function showTemp(response){
        let temperature = Math.round(response.data.main.temp);
        let place = response.data.name;
        let cityTemp = document.querySelector("#todayTemp");
        cityTemp.innerHTML = `${temperature}`
        let whereAreWe = document.querySelector("#city-name");
        whereAreWe.innerHTML = `Today in ${place}`;
        let conditions = response.data.weather[0].description;
        let weatherCondition = document.querySelector("#weatherDescription");
        weatherCondition.innerHTML = `${conditions}`;
    }
    let apiKey = "b2ca677d142120da3a0621ffe0c4cc23";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);
}
navigator.geolocation.getCurrentPosition(showPosition);
}
function showTemp(response){
let temperature = Math.round(response.data.main.temp);
let conditions = response.data.weather[0].description;
let cityTemp = document.querySelector("#todayTemp");
cityTemp.innerHTML = `${temperature}`
let weatherCondition = document.querySelector("#weatherDescription");
weatherCondition.innerHTML = `${conditions}`;

}

function changeCity(event){
    event.preventDefault();
     let whatCity=document.querySelector("#searchBar");
    
    let apiKey = "b2ca677d142120da3a0621ffe0c4cc23";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${whatCity.value}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemp);

    
    let whereAreWe = document.querySelector("#city-name");
    whereAreWe.innerHTML = `Today in ${whatCity.value}`
    
    }

let searchEngine = document.querySelector("#searchButton");
searchEngine.addEventListener("submit", changeCity);


let currentLocButton = document.querySelector("#locationButton");
currentLocButton.addEventListener("click", currentWeather);