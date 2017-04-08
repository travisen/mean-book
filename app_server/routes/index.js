var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
//var ctrlMain = require('../controllers/main');

/*
	Routes serve just as a mapping service from the URL
	of an incoming request and then mapping it to a
	specific piece of application functionality
*/

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
/*
var homepageController = function(req, res) {
	res.render('index', {title: 'Express'});
};
*/
//router.get('/', ctrlMain.index);

/* Other Pages*/
router.get('/about', ctrlOthers.about);

module.exports = router;
