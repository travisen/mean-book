/* Get 'home' page */
module.exports.homelist = function(req, res){
	res.render('locations-list', {
        title: 'Loc8r - find a place to work with WIFI.',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find awesome places to work with wifi near you!!'
        },
        sidebar: ' Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with cofee, cake or a pint?? Let Loc8r help you find the place you\'re looking for.',
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Ninas',
            address: '1111 Dunmore, PA',
            rating: 5,
            facilities: ['Pizza', 'Wings', 'Premium wifi'],
            distance: '1000m'
        },{
            name: 'Boss',
            address: 'Boss St, PA, 1850BOSS',
            rating: 3,
            facilities: ['Boss Food', 'Regular FOOD', 'bad wings',
            'cat fancy'],
            distance: '200m'            
        }]
    });
};

/* Get 'Location info' page */
module.exports.locationInfo = function(req, res){
	res.render('location-info', {title: 'Location info'});
};

/* Get 'Add review' pages */
module.exports.addReview = function(req, res){
	res.render('location-review-form', {title: 'Add review'});
};

