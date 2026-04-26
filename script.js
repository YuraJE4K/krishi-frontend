const API = "https://krishi-api-yr1y.onrender.com";

function show(id){
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// WEATHER
function getWeather(){
    let city = document.getElementById("city").value;

    fetch(`${API}/weather?city=${city}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("weatherResult").innerText =
        `Temp: ${data.temp}°C | Humidity: ${data.humidity} | ${data.weather}`;
    });
}

// CROP
function getCrop(){
    let temp = document.getElementById("temp").value;
    let humidity = document.getElementById("humidity").value;

    fetch(`${API}/crop?temp=${temp}&humidity=${humidity}&weather=clear`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("cropResult").innerText =
        JSON.stringify(data.recommendations);
    });
}

// CHAT
function sendMsg(){
    let msg = document.getElementById("msg").value;

    fetch(`${API}/chat`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({message: msg})
    })
    .then(res => res.json())
    .then(data => {
        let box = document.getElementById("chatBox");
        box.innerHTML += `<p><b>You:</b> ${msg}</p>`;
        box.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
    });
}

// MARKET
function getPrices(){
    let commodity = document.getElementById("commodity").value;
    let state = document.getElementById("state").value;

    fetch(`${API}/prices?commodity=${commodity}&state=${state}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("marketResult").innerText =
        JSON.stringify(data);
    });
}
