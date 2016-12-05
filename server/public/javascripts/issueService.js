(function(){
  //initialize the angular app and inject dependencies.
  angular.module("axirt.service", [])
    .service('issueservice', function() {
      var _issue = {};

      return {
        getIssue: function() {
          return _issue;
        },
        setIssue: function(issue) {
          _issue = issue
        }
      }

    })
    
})();
