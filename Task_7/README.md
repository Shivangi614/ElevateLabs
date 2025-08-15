# TASK 7 -[Fetch and Display Data from a Public API Using Fetch API - Weather App ]

## Objective

Use JavaScript Fetch API to get live weather data from a public API and display it on a webpage, with a dynamic background that changes based on temperature.

# Tools Used

- HTML – Structure of the webpage
- CSS – Styling and layout
- JavaScript - Fetching and displaying weather data
- OpenWeatherMap API – Public weather API

# Features

- Fetches live weather data from OpenWeatherMap API
-  Displays city name, temperature, weather description, and humidity
-  Changes background Image dynamically based on temperature
- Handles errors when fetching data
- Includes Reload button to fetch latest weather data
- Works in Chrome, Edge, Firefox, and other browsers

# How It Works

- User enters a city name in the search box.
- JavaScript fetch() sends a request to OpenWeatherMap API
- API responds with JSON weather data.
- Data is displayed inside the webpage container.
- The background Image changes:
    Cold if temp ≤ 10°C (Cold)
    Moderate if 10°C < temp ≤ 25°C (Moderate)
    Hot if temp > 25°C (Hot)

- If there’s a network/API error, an error message is shown.