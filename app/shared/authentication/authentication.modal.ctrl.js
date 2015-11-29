/**
 * Authentication modal controller
 */
authenticationMdl.controller('authenticationModalCtrl', function ($scope, AuthenticationService, $uibModalInstance) {
    // submit connection information
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.mail, $scope.password);
        AuthenticationService.connect(123456);

        $uibModalInstance.close();
    }
});