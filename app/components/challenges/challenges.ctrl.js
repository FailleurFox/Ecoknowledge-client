/**
 * Challenges page controller
 */

challengesMdl.controller('challengesCtrl', function ($scope, $http, $interval, AuthenticationService) {
    // filter bar variables
    $scope.sortOptions = {
        'nom': 'name',
        'points min.': 'levels[0].points',
        'points max.': 'levels.slice(-1)[0].points',
        'date d\'ouverture': 'startTime',
        'date de fermeture': 'endTime'
    };
    $scope.sortBy = 'name';

    // fill the challenges grid
    $scope.refresh = function() {
        // TODO call server
        $http({
            method: 'GET',
            url: $scope.serverURL + 'mosaic?userID=' + AuthenticationService.getUserId()
        }).success(function (data, status, headers, config) {
            $scope.challenges = data;
        });
    };

    $scope.refresh();

    // Auto refresh
    $interval(function(){
        $scope.refresh();
    }, 60000);
});