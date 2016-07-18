//var request = require('request');
var gamma = require('gamma');
//var url = 'http://ipinfo.io';
  var url = 'http://ip-api.com/json/?fields=city'

function getLocation() {
	return new Promise(function (resolve, reject) {
		request({
			url: url,
			json: true
		}, function (error, response, body) {
			if (error) {
				reject('Unable to guess location');
			} else {
				console.log(body);
				resolve(body);
			}
		});
	});
};