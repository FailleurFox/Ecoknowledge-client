/**
 * Authentication component controller
 */
authenticationMdl.controller('authenticationCtrl', function ($scope, AuthenticationService) {
    // submit connection information
    $scope.onSubmit = function () {
        console.log($scope.mail, $scope.password);

        $http({
            method: 'GET',
            url: $rootScope.serverURL + 'users' + $scope.mail,
            params: {'password': $scope.password}
        }).success(function (data, status, headers, config) {
            AuthenticationService.connect(data.id);
        });
    }
});