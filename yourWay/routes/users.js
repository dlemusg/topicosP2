var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

const authCheck = (req, res, next) => {
    if(!req.user){
        // if user is no logged in
        res.redirect('/auth/login');
    } else {
        // if logged in
        next();
    }
};


router.get('/location', authCheck, function (req, res) {
	res.render('location');
});

router.get('/location', authCheck,  function (req, res) {
	res.render('location');
	res.redirect('/users/location');
});

var UserLocation = require('../models/location');

router.post('/location', (req, res) => {
	var username = req.user.username;
	var latitude = req.body.latitude;
	var longitude = req.body.longitude;
	var cachelat0 = req.body.cach0la;
	var cachelat1 = req.body.cach1la;
	var cachelat2 = req.body.cach2la;
	var cachelat3 = req.body.cach3la;
	var cachelat4 = req.body.cach4la;
	var cachelon0 = req.body.cach0lo;
	var cachelon1 = req.body.cach1lo;
	var cachelon2 = req.body.cach2lo;
	var cachelon3 = req.body.cach3lo;
	var cachelon4 = req.body.cach4lo;
	var lat = [cachelat0,cachelat1,cachelat2,cachelat3,cachelat4];
	var lon = [cachelon0,cachelon1,cachelon2,cachelon3,cachelon4];
	for(i = 0; i<5;i++){
		console.log(lat[i]);
		if(lat[i] != undefined && lon[i] != undefined){
			var newUserLocation = new UserLocation({
				username: username,
				latitude: lat[i],
				longitude: lon[i]
			});
			UserLocation.addLocation(newUserLocation, function (err, location) {
				if (err) throw err;
				console.log(location);
			});
		}else break;
	}
	res.json('Successfully created');
});

module.exports = router;