(function(){
	//initialize the angular app and inject dependencies.
	angular.module("axirt", [
    'ngRoute',
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: './pages/home.html'
      })
      .otherwise({
        templateUrl: './pages/404.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
})();