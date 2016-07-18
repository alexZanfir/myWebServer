var express =  require('express');
var request =  require('request');
var app = express();
var PORT = process.env.PORT || 3000;

var city = "";
//var weather = require('./weather.js');
//var location = require('./location.js');




app.get('/about', function(req, res){

	res.send('Hello About Alex');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('The server started on port '+PORT+'!');
});

