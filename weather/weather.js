async function getWeather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let apiKey = "bd00e1012bd69262e26c7caa8c5dcd85"; 
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    console.log(data);

    
    if (data.cod === 404 || data.cod === "404") {
        document.getElementById("output").innerHTML = "City Not Found!";
        return;
    }

    if (data.cod === 401 || data.cod === "401") {
        document.getElementById("output").innerHTML = "Invalid API Key!";
        return;
    }

    document.getElementById("output").innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}
