/**
 * Navigation bar controller
 */
navbarMdl.controller('navbarCtrl', function ($scope, $uibModal, AuthenticationService) {
    $scope.isLoggedIn = AuthenticationService.isLoggedIn;
    $scope.getUserId = AuthenticationService.getUserId;
    // page selected
    $scope.selected=0;

    // "Se connecter"
    $scope.onAuthClick = function(){
        $uibModal.open({
            animation: true,
            templateUrl: 'app/shared/authentication/authentication.modal.view.html',
            controller: 'authenticationModalCtrl'
        });
    };

    // "Se déconnecter"
    $scope.onDisconnectionClick = function(){
        AuthenticationService.disconnect();
    };
});