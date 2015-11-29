/**
 * Created by Hugo on 25/11/2015.
 */
authenticationMdl.controller('authenticationCtrl', function ($scope, AuthenticationService) {
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.mail, $scope.password);
        AuthenticationService.connect(123456);
    }
});