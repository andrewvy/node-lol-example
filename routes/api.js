/*
 * Serve JSON to our AngularJS client
 */

/* exports.name = function (req, res) {
  	res.json({
  		name: 'Bob'
  	});
}; 

TOO LAZY TO PUT THIS IN IT'S OWN MODULE.
API routes are located in app.js
Deal with it.

var lol = require('../lol-client');

exports.summoner = function (req, res) {
    console.log("Summoner Name: " + req.body.name);
    lol.getSummonerByName(req.body.name, function(err, res){
	console.log(res);

    });
}; */
