var weather = require('./weather.js');
var location = require('./location.js');

function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
}
// var argv = require('yargs')
// 	.option('location', {
// 		alias: 'l',
// 		demand: false,
// 		describe: 'Location to fetch weather for',
// 		type: 'string'
// 	})
// 	.help('help')
// 	.argv;




// if (typeof argv.l === 'string' && argv.l.length > 0) {
// 	console.log('Location was provided');
// 	console.time('test');
// 	weather(argv.l).then(function (currentWeather) {
// 		console.log(currentWeather);
// 	console.timeEnd('test');
// 	}).catch(function (error) {
// 		console.log(error);
// 	})
// } else {
// 	console.log('Location was not provided');
// 	console.time('noLocation');
// 	location().then(function (loc) {
// 		return weather(loc.city);
// 	}).then(function (currentWeather) {
// 		console.log(currentWeather);
// 		console.timeEnd('noLocation');
// 	}).catch(function (error) {
// 		console.log(error)
// 	});
// }