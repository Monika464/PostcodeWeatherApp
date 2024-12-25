const axios = require("axios");
//const forecast = require("./forecast");

const geocode = (address, callback) => {
  const url =
    "https://us1.locationiq.com/v1/search?key=pk.4445013492f295d88e56ecea546a9304&q=" +
    encodeURIComponent(address) +
    "&format=json";

  axios
    .get(url)
    .then((response) => {
      const lat = response.data[0].lat;
      const lon = response.data[0].lon;
      const location = response.data[0].display_name;

      // Wywołanie funkcji forecast, która pobiera dane pogodowe na podstawie szerokości i długości geograficznej
      forecast(lat, lon, (weatherData) => {
        // Callback do serwera z danymi geolokalizacyjnymi i pogodowymi
        callback({
          location,
          lat,
          lon,
          weather: weatherData.current.condition.text,
          temperature: weatherData.current.temp_c,
        });
      });
    })
    .catch((error) => {
      console.error("Wystąpił błąd:", error);
    });
};

// Funkcja forecast
const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherapi.com/v1/current.json?key=cacc28221be14c61981131839242308&q=" +
    latitude +
    "," +
    longitude;

  axios
    .get(url)
    .then((response) => {
      callback(response.data); // Przekazanie danych pogodowych przez callback
    })
    .catch((error) => {
      console.error("Wystąpił błąd:", error);
    });
};

module.exports = geocode;
