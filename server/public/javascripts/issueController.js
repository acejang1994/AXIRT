(function(){
  //initialize the angular app and inject dependencies.
  angular.module("axirt.issuecontroller", ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/issue', {
          templateUrl: './pages/issue.html',
          controller: 'IssueController',
          controllerAs: 'vm'
        })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })
    .controller('IssueController', IssueController);

  function IssueController($http) {
    var vm = this;

    vm.loadQuestions = function() {
      $http.get('/issues').then(
        function success(response) {
          console.log(response)
          vm.issues = response.data;
        }, function error(response) {
          console.log(response);
        }
      );
    }

    vm.loadQuestions();
  }
})();
