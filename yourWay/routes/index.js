var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/index',  function(req, res){
	res.render('index');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/auth/login');
	}
}

var objectId = require('mongodb').ObjectID;
var assert = require('assert');
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
//var url = 'mongodb://mongo-server/';   
module.exports = router;
var resultArray = [];


const authCheck = (req, res, next) => {
    if(!req.user){
        // if user is no logged in
        res.redirect('/auth/login');
    } else {
        // if logged in
        next();
    }
};

router.get('/rutas', authCheck, function(req, res, next) {



	mongo.connect(url, function(err, db) {
		assert.equal(null, err);
		var dbo = db.db('yourWay3')
	  var cursor = dbo.collection('location').find({"username": req.user.username});
		
		cursor.forEach(function(doc, err) {
			assert.equal(null, err);
			resultArray.push(doc);
	  }, function() {
		db.close();
		res.json(resultArray);
	  });
	});
});
