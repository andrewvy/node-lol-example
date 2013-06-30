
/**
 * Module dependencies.
 */

var express = require('express'),
    routes = require('./routes'),
    util = require('util'),
    LoLClient = require('./lol-client'),
    api = require('./routes/api');

var app = module.exports = express();

// LoL Client Variables and Options
var client, options, summoner;

options = {
    region: 'na',
    username: '', //MUST BE LOWERCASE OR IT'LL BREAK.
    password: '',
    version: '3.8.13_06_12_20_25',
    debug: false
}

// Configuration
app.configure(function() {
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(express.static(__dirname + '/public'));
    app.use(app.router);
});

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

// Routes
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

// JSON API

// I DON'T KNOW HOW TO PUT THIS IN ROUTES.*
app.post('/api/summoner', function(req, res){
    console.log("Searching: " + req.body.name);
    client.getSummonerByName(req.body.name, function (err, data){
	if (data != null){
	    console.log(data.object);
	    var obj = {
		summonerLevel: data.object.summonerLevel.value,
		summonerAcctId: data.object.acctId.value,
		summonerId: data.object.summonerId.value
	    };
	    res.json(obj);
	} else {
	    console.log("Name not found!");
	}
    });
});

// Redirect all others to the index (HTML5 history)
app.get('*', routes.index);

// Start server

app.listen(3000, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//Start LoLClient

client = new LoLClient(options);
client.on('connection', function(){
    console.log("LoLClient is running!");
});
client.connect();
