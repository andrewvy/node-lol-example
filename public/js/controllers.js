'use strict';

/* Controllers */


myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.submit = function(){
	var post = $http({
	    method: 'POST',
	    url: '/api/summoner/',
	    data: {name: $scope.summonerName},
	    headers: {'Content-Type': 'application/json'}
	    });

	// Returns promise, updates global $scope
	post.success(function(res){
		$scope.summonerDataLevel = res.summonerLevel;
		$scope.summonerDataAcctId = res.summonerAcctId;
		$scope.summonerDataSummonerId = res.summonerId;
	});
	$scope.summonerName = '';
    };
}]);
