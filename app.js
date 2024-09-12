const express = require("express");
const path = require("path");
//const Handlebars = require("handlebars");
const hbs = require("hbs");
const geocode = require("./utils/geocode"); // Zaimportowanie funkcji geocode
const forecast = require("./utils/forecast");
const app = express();
const port = 3000;

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "public");
const viewsPath = path.join(__dirname, "views");
const partialsPath = path.join(__dirname, "partials");

// Ustawienie katalogu widoków i silnika szablonów
app.set("views", path.join(viewsPath));
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather",
    name: "Andrew Mead",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Andrew Mead",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is some helpful text.",
    title: "Help",
    name: "Andrew Mead",
  });
});

app.get("/weather", (req, res) => {
  const address = req.query.address;

  if (!address) {
    return res.send({ error: "You must provide an address!" });
  }

  res.send({ address });
});
//});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "This is some not helpful text.",
    title: "404",
    name: "Andrew Mead",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "This is some not too much helpful text.",
    title: "404",
    name: "Andrew Mead",
  });
});

// app.get("/help/*", (req, res) => {
//   res.send("help page not found");
// });

// app.get("*", (req, res) => {
//   res.send("My 404 page");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
