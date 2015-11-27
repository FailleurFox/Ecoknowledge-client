/**
 * Created by Hugo on 25/11/2015.
 */
authenticationMdl.controller('authenticationModalCtrl', function ($scope, AuthenticationService, $uibModalInstance) {
    $scope.onSubmit = function(){
        // TODO call server
        console.log($scope.mail, $scope.password);
        AuthenticationService.setUserId(123456);

        $uibModalInstance.close();
    }
});