/**
 * Challenge modal controller
 */
challengeMdl.controller('challengeModalCtrl', function ($scope, $uibModalInstance, challenge, refreshFunction, AuthenticationService) {
    $scope.challenge = challenge;

    $scope.isLoggedIn = AuthenticationService.isLoggedIn;

    $scope.cancel = function(){
        $uibModalInstance.close();
    };

    // accept challenge
    $scope.takeUpChallenge  = function () {
        // TODO take up challenge
        console.log("Challenge #"+$scope.challenge.id+" accepted !");
        $uibModalInstance.close();
        refreshFunction();
    };
});