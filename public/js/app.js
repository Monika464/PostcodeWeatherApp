console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const messageThree = document.querySelector("#message-3");

messageOne.textContent = "";
messageTwo.textContent = "";
messageThree.textContent = "";

//console.log("mesOne", messageOne);

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messageOne.textContent = "Loading...";

  const location = search.value;

  const messageThree = location;

  messageThree.textContent = location;

  const urlLoc =
    "https://us1.locationiq.com/v1/search?key=pk.4445013492f295d88e56ecea546a9304&q=" +
    location +
    "%20&format=json&";
  fetch(urlLoc)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = "Location not found. Try again.";
        messageThree.textContent = "";
        messageTwo.textContent = "";
      } else {
        // console.log("data-local", data[0].lat, data[0].lon);
        //const latitude = data[0].lat;
        //const longitude = data[0].lon;

        const fetchedLocation = `${data[0].display_name}`;
        //console.log("data-localaa", fetchedLocation);

        //messageThree.textContent = `Location: ${fetchedLocation}`;

        fetchingWeather(
          "https://api.weatherapi.com/v1/current.json?key=cacc28221be14c61981131839242308&q=" +
            data[0].lat +
            "," +
            data[0].lon,
          fetchedLocation
        );
      }
    })
    .catch((error) => {
      console.error("Błąd:", error);
    });
});

const fetchingWeather = (url, location) => {
  fetch(url)
    .then((response) => {
      //console.log("Raw response:", response); // Zobacz surową odpowiedź
      return response.json();
    })
    .then((data) => {
      //console.log("Parsed data:", data); // Zobacz sparsowane dane
      if (data.error) {
        console.log(data.error);
        messageOne.textContent = "Unable to fetch weather data.";
        messageOne.textContent = "";
      } else {
        //console.log("daata-weathertemp", data.current.temp_c); // Zwrócone dane z API
        messageThree.textContent = `Location: ${location}`;
        messageTwo.textContent = `Weather description: ${data.current.condition.text}, temperature ${data.current.temp_c}`;
        messageOne.textContent = "";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      messageOne.textContent = "Data not fetched";
    });
};
