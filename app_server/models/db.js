var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/Loc8r';
/* 
    Is insecure but use for handiness 
    Wouldn't do this on actual app
*/
if(process.env.NODE_ENV === 'production') {
    dbURI = 'mongodb://heroku_f8jpfm6p:ldi3v4uakk1dnekakepdiu4epi@ds159200.mlab.com:59200/heroku_f8jpfm6p'
}
/*
if (process.env.NODE_ENV === 'production') {
    dbURI = process.env.MONGOLAB_URI;
}
*/
mongoose.connect(dbURI);

//Monitor for successful connection
mongoose.connection.on('connected', function(){
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
   console.log('Mongoose connection error: ' + err); 
});

mongoose.connection.on('disconnected', function(){
   console.log('Mongoose disconnected'); 
});

var gracefulShutdown = function(msg, callback){
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

//For when Heroku shuts down a process.
process.on('SIGTERM', function() {
    gracefulShutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});


require('./locations');
