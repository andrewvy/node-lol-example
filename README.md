node-lol-example
===============

An example app created using https://github.com/nagash/node-lol-client along with a ExpressJS REST API, and an AngularJS front-end. Try demo here! http://andrewvy.com:3001

As of now, I upgraded the library to the current version: 3.8.13_06_12_20_25

Clone the repo, add your credentials to app.js, and run 'node app.js'. 
There is a current bug where you may not get a login auth token. Just keep retrying until the application connects to Riot's server.

Enter in a Summoner Name, and it'll retrive the summoner's level, account id, and summoner id.

Credits to Nagash for his work on https://github.com/nagash/node-lol-client .
