(function() {

    angular.module("axirt.issuecontroller")
        .directive('issue', function() {
            return{
                templateUrl: './pages/eachIssue.html',
                controllerAs: 'vm',
                bindToController: true, // because the scope is isolated
                scope: {
                    quest: '='
                }
            }
        });

})();