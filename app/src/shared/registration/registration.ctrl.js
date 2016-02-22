/**
 * Registration component controller
 */
registrationMdl.controller('registrationCtrl', function ($scope, AuthenticationService) {
    // submit registration information
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.firstName, $scope.lastName, $scope.mail, $scope.password);
        AuthenticationService.setUserId(123456);
    }
});