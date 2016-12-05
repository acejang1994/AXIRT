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

  function IssueController($http, $window) {
    var vm = this;

    vm.loadIssues = function() {
      $http.get('/issues').then(
        function success(response) {
          vm.issues = response.data;
        }, function error(response) {
          console.log(response);
        }
      );
    }

    vm.postIssue = function() {
      console.log(vm.issueContent);
      var newIssue = {
        issue : vm.issueContent,
        authorId : "id",
      }
      $http.post('/issues', newIssue).then(
        function success(response){
          console.log(response);
          $window.location.reload();

        }, function error(response){
          console.log(response)
        });
    }

    vm.convertDate = function(date) {
      var d = new Date(date);
      var options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };
      return d.toLocaleDateString("en-US", options)
    }

    vm.loadIssues();
  }
})();
