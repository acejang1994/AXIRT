(function(){
  //initialize the angular app and inject dependencies.
  angular.module("axirt.issue", ['ngRoute'])
    .config(function($routeProvider, $locationProvider) {
      $routeProvider
        .when('/issue/:id', {
          templateUrl: '../pages/eachIssue.html',
          controller: 'Controller',
          controllerAs: 'vm'
        })
      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });
    })
    .controller('Controller', Controller);

  function Controller($http, $window, $routeParams) {
    var vm = this;
    vm.eachIssue = {};
    vm.issueId = $routeParams.id;

    vm.getIssue = function() {

      $http.post('/issues/id', {"id": vm.issueId } ).then(
        function success(response){
          console.log(response);
          vm.eachIssue = response.data;

        }, function error(response){
          console.log(response)
        });
    }
    vm.getIssue();

    vm.postComment = function() {
      var newIssue = {
        comment : vm.commentContent,
        authorId : "id",
        issueId : vm.eachIssue._id
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
