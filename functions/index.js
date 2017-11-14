var functions = require("firebase-functions");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");

// set EXPRESS
// set CORS
// parse body into json
var app = express();
app.use(cors({ origin: true }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());




// run project
var api = require("./route/api");

api = functions.https.onRequest(function(req, res) {

    if (!req.path) {
        req.url = '/'+req.url; // prepend '/' to keep query params if any
    }
    return api(req, res);

});

module.exports = {"api": api};