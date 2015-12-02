/**
 * Challenges page controller
 */
challengesMdl.controller('challengesCtrl', function ($scope, $http, AuthenticationService) {
    // fill the challenges grid
    // TODO call server
    $http({method: 'GET', url: 'http://localhost:8081/Ecoknowledge/mosaic?userID='+AuthenticationService.getUserId()}).success(function(data, status, headers, config) {
        $scope.challenges = data;
    });
});