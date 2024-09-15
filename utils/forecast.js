const axios = require("axios");

// Ustal URL API pogodowego, np. z weatherapi.com

// const forecast = (latitude, longitude) => {
//   const url =
//     "https://api.weatherapi.com/v1/current.json?key=cacc28221be14c61981131839242308&q=" +
//     latitude +
//     "," +
//     longitude;

//   // Wysyłanie zapytania GET
//   axios
//     .get(url)
//     .then((response) => {
//       // Wypisanie danych pogodowych w konsoli
//       console.log("rere", response.data.current.condition.text);
//       //callback(response.data);
//     })
//     .catch((error) => {
//       console.error("Wystąpił błąd:", error);
//     });
// };

//forecast(52.23, 21.01);
// Funkcja forecast
// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "https://api.weatherapi.com/v1/current.json?key=cacc28221be14c61981131839242308&q=" +
//     latitude +
//     "," +
//     longitude;

//   axios
//     .get(url)
//     .then((response) => {
//       callback(response.data); // Przekazanie danych pogodowych przez callback
//     })
//     .catch((error) => {
//       console.error("Wystąpił błąd:", error);
//     });
// };

// module.exports = forecast;

// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast
