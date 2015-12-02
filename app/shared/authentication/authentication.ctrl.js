/**
 * Authentication component controller
 */
authenticationMdl.controller('authenticationCtrl', function ($scope, AuthenticationService) {
    // submit connection information
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.mail, $scope.password);
        AuthenticationService.connect("20d3efd3-4cf0-4dd8-9e01-6d2c223599a3"); // FIXME hardcoded userID
    }
});