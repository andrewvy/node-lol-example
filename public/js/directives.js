'use strict';

/* Directives */


angular.module('myApp.directives', []).
  	directive('appVersion', ['version', function(version) {
    	return function(scope, elm, attrs) {
      		elm.text(version);
    	};
  	}]);

 /* angular.module('myApp.directives', []).
    directive('ngBlur',['$parse', function($parse) {
	return function(scope, element, attr) {
	    element.bind('blur', function(event){
		scope.$apply(function(){
		    fn(scope, {$event:event});
		});
	    });
	};
    }]); */
