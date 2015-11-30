/**
 * Challenge modal controller
 */
challengeMdl.controller('challengeModalCtrl', function ($scope, $uibModalInstance, challenge) {
    $scope.challenge = challenge;

    $scope.cancel = function(){
        $uibModalInstance.close();
    }

    // accept challenge
    $scope.takeUpChallenge  = function () {
        // TODO take up challenge
        console.log("Challenge #"+$scope.challenge.id+" accepted !");
        $uibModalInstance.close();
    };
});