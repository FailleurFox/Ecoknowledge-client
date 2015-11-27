/**
 * Created by Hugo on 25/11/2015.
 */
navbarMdl.controller('navbarCtrl', function ($scope, $uibModal, AuthenticationService) {
    $scope.selected=0;

    $scope.onAuthClick = function(){
        $uibModal.open({
            animation: true,
            templateUrl: 'app/shared/authentication/authentication.modal.view.html',
            controller: 'authenticationModalCtrl'
        });
    };

    $scope.onDisconnectionClick = function(){
        AuthenticationService.setUserId(undefined);
    };
});