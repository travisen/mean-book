var mongoose = require('mongoose');

//sub document opening times. must be BEFORE locationScheme
var openingTimeSchema = new mongoose.Schema({
    days: {type: String, required: true},
    opening: String,
    closing: String,
    closed: {type: Boolean, required: true }
});

var reviewSchema = new mongoose.Schema({
    author: String,
    rating: {type: Number, required: true, min: 0, max: 5},
    reviewText: String,
    createdOn: {type: Date, "default": Date.now}    
});

//Define a new mongoose schema
var locationSchema = new mongoose.Schema({
    name: String,
    address: String,
    rating: {type: Number, "default": 0, min: 0, max: 5}, //Set default and data validation
    facilities: [String],
    coords: {type: [Number], index: '2dsphere'},
    openingTimes: [openingTimeSchema], //add nested schema by referencing another schema
    reviews: [reviewSchema]
});

mongoose.model('Location', locationSchema);
