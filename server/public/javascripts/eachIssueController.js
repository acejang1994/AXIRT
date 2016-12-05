(function(){
  //initialize the angular app and inject dependencies.
  angular.module("axirt.issue", ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/yo', {
          templateUrl: './pages/eachIssue.html',
          controller: 'Controller',
          controllerAs: 'vm'
        })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })
    .controller('Controller', Controller);

  function Controller($http) {
    var vm = this;
    vm.issue = {};

    // vm.service = issueservice;
    // console.log(issueservice.getIssue());

    vm.postComment = function() {
      var newIssue = {
        comment : vm.commentContent,
        authorId : "id",
        issueId : vm.issueId
      }
      $http.post('/issues/comment', newIssue).then(
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
  }
})();
