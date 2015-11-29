/**
 * Authentication component controller
 */
authenticationMdl.controller('authenticationCtrl', function ($scope, AuthenticationService) {
    // submit connection information
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.mail, $scope.password);
        AuthenticationService.connect(123456);
    }
});