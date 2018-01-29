const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 8081 || process.env.PORT || 8080;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
// const axios = require("axios");
const routes = require("./routes");
const db = require("firebase");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
