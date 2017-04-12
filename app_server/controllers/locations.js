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
            rating: 1,
            facilities: ['Boss Food', 'Regular FOOD', 'bad wings',
            'cat fancy'],
            distance: '200m'            
        }]
    });
};

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: {
            title: 'Starcups'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '999 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 41.443582,
                lng: -75.674543
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

/* Get 'Add review' pages */
module.exports.addReview = function(req, res){
	res.render('location-review-form', {
        title: 'Review Starcups on Loc8r',
        pageHeader: { title: 'Review starcups' }
    });
};

