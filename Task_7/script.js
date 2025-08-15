const databox = document.getElementById('data');
const error = document.getElementById('error');
const reloadbtn = document.getElementById('reloadbtn');
const fetchbtn = document.getElementById('fetchbtn');
const API_KEY = "df4ee14e5142af4c9ed3f6f3530c9642";

fetchbtn.addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    const country = document.getElementById('country').value.trim();
    if (!city) {
        error.textContent = "Please Enter a Valid City Name !";
        return;
    }
    else if (!country) {
        error.textContent = "Please Enter a Valid Country Name !";
        return;
    }
    else {
        fetchWeather(city, country);
    }
});

reloadbtn.addEventListener('click', () => {
    location.reload();
});

function fetchWeather(city, country) {
    error.textContent = "";
    databox.innerHTML = "Loading Data...";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`)
        .then(res => {
            if (!res.ok) {
                throw new Error("CITY NOT FOUND !");
            }
            return res.json();
        })
        .then(data => {
            let temp=data.main.temp;
            databox.innerHTML = `
        <p>CITY: ${data.name}</p>
        <p>TEMPRATURE: ${temp} deg Celcius </p>
        <p>WEATHER: ${data.weather[0].description}</p>
        <p>HUMIDITY: ${data.main.humidity} %</p>
        `;

            if (temp <= 10) {
                document.body.style.backgroundImage = "url('cold.jpg')";
            } else if (temp > 10 && temp <= 25) {
                document.body.style.backgroundImage = "url('moderate.jpg')";
            } else {
                document.body.style.backgroundImage= "url('hot.avif')";
            }
        })
        .catch(err => {
            databox.innerHTML = "";
            error.textContent = err.message;
        });
}

