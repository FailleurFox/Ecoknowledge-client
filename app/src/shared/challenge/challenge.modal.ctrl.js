/**
 * Challenge modal controller
 */
challengeMdl.controller('challengeModalCtrl', function ($scope, $http, $rootScope, $uibModalInstance, challenge, refreshFunction, AuthenticationService) {
  $scope.trunc = Math.trunc;
    $scope.challenge = challenge;

    $scope.isLoggedIn = AuthenticationService.isLoggedIn;

    $scope.cancel = function(){
        $uibModalInstance.close();
    };

    // accept challenge
    $scope.takeUpChallenge  = function (){

        $.ajaxPrefilter( "json script", function( options ) {
            options.crossDomain = true;
        });

        var data ={'challenge': challenge.id, 'user': AuthenticationService.getUserId()};
        $http.post($rootScope.serverURL + 'goals/', data).success(function (data, status, headers, config) {});

        $uibModalInstance.close();
        refreshFunction();
    };
});
