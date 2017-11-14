/**
 * Created by ikhlasfirlana on 11/14/17.
 */
var functions = require("firebase-functions");
var express = require('express');
var moment = require("moment");
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', moment().format('DD-MM-YYYY, HH:mm:ss'));
    next()
});
// define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page');
});
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds');
});

module.exports = router;