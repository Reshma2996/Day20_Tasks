document.addEventListener('DOMContentLoaded', function() {
    fetchWeather();
    fetchLocation();
    fetchCurrencyRates();
});

function fetchWeather() {
// const apiKey = 'bda97eca921e2b8df6d264a482081839';
  const apiKey = 'a1b32df349417336d7e005dbb07f60c0';
    //fetch(`https://api.weatherstack.com/current?access_key=${apiKey}&query=India`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?access_key=${apiKey}&query=India`)

        .then(response => response.json())
        .then(data => {
            console.log('Weather data:', data); // Log the weather data
            if (data.success === false) {
                throw new Error(data.error.info);
            }
            const weatherDiv = document.getElementById('weather');
            const weatherHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.location.name}, ${data.location.country}</h5>
                        <p class="card-text">Temperature: ${data.current.temperature}°C</p>
                        <p class="card-text">Weather: ${data.current.weather_descriptions[0]}</p>
                    </div>
                </div>
            `;
            weatherDiv.innerHTML = weatherHTML;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function fetchLocation() {
    const apiKey = '818c60239ca457d2bb26744fb04b7076';
    fetch(`https://api.ipstack.com/check?access_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('Location data:', data); // Log the location data
            if (data.success === false) {
                throw new Error(data.error.info);
            }
            const locationDiv = document.getElementById('location');
            const locationHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.city}, ${data.country_name}</h5>
                        <p class="card-text">IP: ${data.ip}</p>
                        <p class="card-text">Region: ${data.region_name}</p>
                    </div>
                </div>
            `;
            locationDiv.innerHTML = locationHTML;
        })
        .catch(error => console.error('Error fetching location data:', error));
}

function fetchCurrencyRates() {
    const apiKey = 'e1f5b06eba741b50cf9c8fa57810fac4';
    fetch(`https://data.fixer.io/api/latest?access_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            console.log('Currency data:', data); // Log the currency data
            if (data.success === false) {
                throw new Error(data.error.info);
            }
            const currencyDiv = document.getElementById('currency');
            const currencyHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">USD to EUR</h5>
                        <p class="card-text">Rate: ${data.rates.USD}</p>
                    </div>
                </div>
            `;
            currencyDiv.innerHTML = currencyHTML;
        })
        .catch(error => console.error('Error fetching currency rates:', error));
}
