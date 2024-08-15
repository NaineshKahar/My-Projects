require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    
    if(response.status == 404) {
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none";
    }

    else {
        var data = await response.json();
    
        // console.log(data);
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = Math.round(3.6 * data.wind.speed) + " km/h";
    
		// Set weather icon based on weather condition
        switch(data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "images/clear-day.svg";
                break;
            case "Clouds":
                weatherIcon.src = "images/cloudy.svg";
                break;
            case "Drizzle":
                weatherIcon.src = "images/drizzle.svg";
                break;
            case "Dust":
                weatherIcon.src = "images/dust.svg";
                break;
            case "FallingStars":
                weatherIcon.src = "images/falling-stars.svg";
                break;
            case "Fog":
                weatherIcon.src = "images/fog.svg";
                break;
            case "Hail":
                weatherIcon.src = "images/hail.svg";
                break;
            case "Haze":
                weatherIcon.src = "images/haze.svg";
                break;
            case "Horizon":
                weatherIcon.src = "images/horizon.svg";
                break;
            case "Hurricane":
                weatherIcon.src = "images/hurricane.svg";
                break;
            case "LightningBolt":
                weatherIcon.src = "images/lightning-bolt.svg";
                break;
            case "Mist":
                weatherIcon.src = "images/mist.svg";
                break;
            case "Overcast":
                weatherIcon.src = "images/overcast.svg";
                break;
            case "Rain":
                weatherIcon.src = "images/rain.svg";
                break;
            case "Sleet":
                weatherIcon.src = "images/sleet.svg";
                break;
            case "Smoke":
                weatherIcon.src = "images/smoke.svg";
                break;
            case "Snow":
                weatherIcon.src = "images/snow.svg";
                break;
            case "Thunderstorm":
                weatherIcon.src = "images/thunderstorms.svg";
                break;
            case "Tornado":
                weatherIcon.src = "images/tornado.svg";
                break;
            default:
                weatherIcon.src = "images/not-available.svg";
        }
    
        document.querySelector('.weather').style.display = "block";
        document.querySelector('.error').style.display = "none";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})