var express =  require('express');
var request =  require('request');
var app = express();
var PORT = process.env.PORT || 3000;

var city = "";
var weather = require('./public/js/weather.js');
var location = require('./public/js/location.js');




app.get('/about', function(req, res){

	res.send();
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('The server started on port '+PORT+'!');
});

