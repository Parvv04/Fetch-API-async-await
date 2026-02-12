let input = document.getElementById("city")
let button = document.getElementById("getWeather")
let output = document.getElementById("showWeather")

async function getLatitudeAndLongitude(city) {
    if (!city) {
        return null;
    }

    let response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    let data = await response.json();
    if(!data.results){
        return null;
    }

    let lat = data.results[0].latitude;
    let lon = data.results[0].longitude;

    return {lat, lon};

}

async function getWeather(lat, lon) {
    let response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    let weather = await response.json();
    return weather;

}

async function RunApp(){
    let city = input.value.trim();
    output.textContent = "Loading...";
    try{
        let coords = await getLatitudeAndLongitude(city);
        if(!coords){
            output.textContent = "City not found. Please try again.";
            return;
        }
        let lat = coords.lat;
        let lon = coords.lon;
        let weather = await getWeather(lat, lon);
        output.textContent = `The current temperature in ${city} is ${weather.current_weather.temperature}°C.`;
    }
    catch(error){
        output.textContent = "An error occurred. Please try again later.";
    }
}
button.addEventListener("click", RunApp);

