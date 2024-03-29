const apiKey = "18c56e66c97f435f724b85eed011163e";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather() {


    var city = document.getElementById("city").value;
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        // document.querySelector(".weather").style.display = "none";
            
        document.querySelector(".city").innerHTML = "-- --";
        document.querySelector(".temp").innerHTML =  "-- --";
        document.querySelector(".humidity").innerHTML =  "-- --";
        document.querySelector(".wind").innerHTML =  "-- --";
        
    }

    else {
        var data = await response.json();
        const weatherIcon = document.querySelector(".weather-icon");
    
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
    
    
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }



}


