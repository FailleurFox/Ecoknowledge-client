/**
 * Authentication component controller
 */
authenticationMdl.controller('authenticationCtrl', function ($rootScope, $http, $scope, AuthenticationService) {
    // submit connection information
    $scope.onSubmit = function () {
        $http({
            method: 'GET',
            url: $rootScope.serverURL + 'users/' + $scope.mail,
            params: {'password': $scope.password}
        }).success(function (data, status, headers, config) {
            AuthenticationService.connect(data.id);
        });
    }
});