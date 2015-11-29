/**
 * Challenges page controller
 */
challengesMdl.controller('challengesCtrl', function ($scope, $http) {
    // fill the challenges grid
    // TODO call server
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-challenges.json'}).success(function(data, status, headers, config) {
        $scope.challenges = data;
    });
});