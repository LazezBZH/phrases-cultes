"use strict";

// Importing express
const express = require("express");

const app = express();

//body-parser already added to express
app.use(express.urlencoded({ extended: false })); // this is for body parsing
app.use(express.json());

const errorController = require("./controllers/error_controller");

const quoteRoute = require("./routes/quote_route");

// enabling CORS to accept from all origins
app.all("*", (req, res, next) => {
  console.log(`${new Date()} - request for ${req.path}`);
  res.set("Access-Control-Allow-Origin", "*");
  next();
});

// the various endpoints
// get all quotes
app.get("/", (req, res) => {
  res.send(
    "<h1>Répliques API.</h1><p><i>Une API permettant d'optenir des répliques cultes de films francophones</i></p><br/> <h2>End-points</h2> <h3>GET /v1/quote</h3><p>Returns an object with one random quote</p><p>Renvoie une réplique aléatoire</p> <h3>GET /v1/quotes</h3><p>Returns an array of all quotes</p><p>Renvoie un tableau de toutes les répliques</p> <h3>GET /v1/quote/<count> e.g GET /v1/quote/4</h3><p>Returns an array of the number of quotes specified</p><p>Renvoie un tableau avec le nombre spécifié de répliques</p> <h3>GET /v1/quote/filter/{{keyword}} e.g GET /v1/quote/filter/bien</h3><p>Returns an object with random quote with the searched keyword</p><p>Renvoie une réplique aléatoire contenant le mot clé</p> <h3>GET /v1/quote/filter/all/{{keyword}} e.g GET /v1/quote/filter/all/bien</h3><p>Returns an array with all quotes with the searched keyword</p><p>Renvoie un tableau de toutes les répliques contenant le mot clé</p> <p><a href='https://github.com/LazezBZH/phrases-cultes' target='blank'>Lien GitHub</a></p>"
  );
});

// get all quotes api request
app.use(quoteRoute);

// added a 404 page
app.use(errorController.pageNotFound);

// setting the port of the process or a default port
app.listen(process.env.PORT || 3000, function () {
  console.log("listening on port: 3000");
});

module.exports = app;
