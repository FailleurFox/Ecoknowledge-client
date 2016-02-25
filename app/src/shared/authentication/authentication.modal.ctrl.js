/**
 * Authentication modal controller
 */
authenticationMdl.controller('authenticationModalCtrl', function ($rootScope, $http, $scope, AuthenticationService, $uibModalInstance) {
    // submit connection information
    $scope.onSubmit = function(){
        $http({
            method: 'GET',
            url: $rootScope.serverURL + 'users/' + $scope.mail,
            params: {'password': $scope.password}
        }).success(function (data, status, headers, config) {
            AuthenticationService.connect(data.id);
        });
        $uibModalInstance.close();
    };
});