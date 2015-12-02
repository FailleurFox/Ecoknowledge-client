/**
 * Challenges page controller
 */

challengesMdl.controller('challengesCtrl', function ($scope, $http, AuthenticationService) {
    // filter bar variables
    $scope.sortOptions = {
        'nom': 'name',
        'points min.': 'levels[0].points',
        'points max.': 'levels[challenge.levels.length-1].points',
        'date d\'ouverture': 'startTime',
        'date de fermeture': 'endTime'
    };
    $scope.sortBy = 'name';

    // fill the challenges grid
    // TODO call server
    $http({
        method: 'GET',
        url: 'http://localhost:8081/Ecoknowledge/mosaic?userID='+AuthenticationService.getUserId()
    }).success(function (data, status, headers, config) {
        $scope.challenges = data;
    });
});