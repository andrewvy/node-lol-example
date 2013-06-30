'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
 	config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	    $routeProvider.otherwise({redirectTo: '/'});
	    $locationProvider.html5Mode(true);
  }]);
