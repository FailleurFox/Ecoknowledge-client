/**
 * Created by Hugo on 25/11/2015.
 */
registrationMdl.controller('registrationCtrl', function ($scope, AuthenticationService) {
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.firstName, $scope.lastName, $scope.mail, $scope.password);
        AuthenticationService.setUserId(123456);
    }
});