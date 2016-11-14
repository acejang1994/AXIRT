var issuesController =  function($scope, $http, $location) {
	$scope.issues = [];

    $http.get("/issues")
	    .success(function(data, status, headers, config) {
	        console.log(data);
	        $scope.issues = data;
	    })
	    .error(function(data, status, headers, config) {
	    	console.log("err", data);
	    });
};