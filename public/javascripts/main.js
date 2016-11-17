(function(){
	//initialize the angular app and inject dependencies.
	var axirt = angular.module("axirt", [
    'ngRoute',
  ]).config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './pages/home.html',
        controller: 'issuesController'

      })
      .otherwise({
        templateUrl: './pages/404.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  })
  // axirt.controller("issuesController", issuesController)
   axirt.controller("issuesController", function($scope, $http, $location) {
  $scope.issues = [];

    $http.get("/issues")
      .success(function(data, status, headers, config) {
          console.log(data);
          $scope.issues = data;
      })
      .error(function(data, status, headers, config) {
        console.log("err", data);
      });
});
})();
