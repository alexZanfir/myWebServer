var express =  require('express');
var weather = require('./public/js/weather.js');
var location = require('./public/js/location.js');
var request = require('request');
var app = express();
var PORT = process.env.PORT || 3000;
app.get('/about', function(req, res){

	res.send('Hello About Alex');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('The server started on port '+PORT+'!');
});

