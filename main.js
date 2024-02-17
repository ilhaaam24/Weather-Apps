const apikey = "8b02c4dc24c8e0e0c17bc0dec3b0f68e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else {
    let data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "assets/images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "assets/images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "assets/images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "assets/images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "assets/images/mist.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "assets/images/snow.png";
    }
    document.querySelector(".error").style.display = "none";

  }
}

searchBtn.addEventListener("click", () => {
  if (searchBox.value == "") {
    alert("Enter city name");
  } else {
    checkWeather(searchBox.value);
    searchBox.value = "";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (searchBox.value == "") {
    document.querySelector(".city").innerText = "City";
  }
});
