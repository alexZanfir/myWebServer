var express =  require('express');
var app = express();
var PORT = 3000;
app.get('/about', function(req, res){

	res.send('Hello About Alex');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('The server has started on port '+PORT+'!');
});

