const path = require("path");
const express = require("express");
const hbs = require("hbs");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();

//Define paths for Express config
const publicDir = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlerbars engine and view location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

// Setup static dir
app.use(express.static(publicDir));

//Routes
app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Amit",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    name: "Amit",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "Some text bout help",
    title: "Help",
    name: "Amit",
  });
});

app.get("/weather", (req, res) => {
  // const userAddress = req.query.address;
  if (!req.query.address) {
    return res.send({
      error: "You must provaide address!",
    });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }

      forecast(latitude, longitude, (error, forcastData) => {
        if (error) {
          res.send({ error });
        }

        res.send({
          forecast: forcastData,
          location: location,
          address: req.query.address,
        });
      });
    }
  );

  // res.send({
  //   forecast: "dsadsa",
  //   location: "dsadsasda",
  //   address: req.query.address,
  // });
});

app.get("/product", (req, res) => {
  if (!req.query.search) {
    return res.send({
      error: "You must provaide search term!",
    });
  }

  console.log(req.query.search);
  res.send({ product: [] });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    errorMessage: "Help atricle not found!",
    title: "404",
    name: "Amit",
  });
});
app.get("*", (req, res) => {
  res.render("404", {
    errorMessage: "Page not found!",
    title: "404",
    name: "Amit",
  });
});

app.listen(3000, () => {
  console.log("Server is up on port 3000");
});
