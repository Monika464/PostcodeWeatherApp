const axios = require("axios");
//const forecast = require("./forecast");
console.log("Hello from geokod");
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

// const geocode = (address) => {
//   const url =
//     //"https://us1.locationiq.com/v1/search?key=pk.4445013492f295d88e56ecea546a9304&q=221b%2C%20Baker%20St%2C%20London%20&format=json&";
//     "https://us1.locationiq.com/v1/search?key=pk.4445013492f295d88e56ecea546a9304&q=" +
//     address +
//     "%20&format=json&";

//   //console.log("czy jest callback", callback);
//   //Wysyłanie zapytania GET
//   axios
//     .get(url)
//     .then((response) => {
//       // Wypisanie danych geo coding w konsoli
//       //callback(response.data[0].lat, response.data[0].lon);
//       forecast(response.data[0].lat, response.data[0].lon);

//       console.log("res", response.data.display_name); // console.log("geodane", response.data[0].lat, response.data[0].lon);
//     })
//     .catch((error) => {
//       console.error("Wystąpił błąd:", error);
//     });
// };
module.exports = geocode;

// const forecast = (latitude, longitude) => {
//     const url =
//       "https://api.weatherapi.com/v1/current.json?key=cacc28221be14c61981131839242308&q=" +
//       latitude +
//       "," +
//       longitude;

//     // Wysyłanie zapytania GET
//     axios
//       .get(url)
//       .then((response) => {
//         // Wypisanie danych pogodowych w konsoli
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error("Wystąpił błąd:", error);
//       });
//   };

////////////////
// const request = require('request')

// const geocode = (address, callback) => {
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

//     request({ url, json: true }, (error, { body }) => {
//         if (error) {
//             callback('Unable to connect to location services!', undefined)
//         } else if (body.features.length === 0) {
//             callback('Unable to find location. Try another search.', undefined)
//         } else {
//             callback(undefined, {
//                 latitude: body.features[0].center[1],
//                 longitude: body.features[0].center[0],
//                 location: body.features[0].place_name
//             })
//         }
//     })
// }

// module.exports = geocode
