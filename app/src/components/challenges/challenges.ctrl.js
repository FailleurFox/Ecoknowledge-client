/**
 * Challenges page controller
 */

challengesMdl.controller('challengesCtrl', function ($scope, $rootScope, $http, $interval, AuthenticationService) {
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

      $scope.challenges = [];
      $http({
        method: 'GET',
        url: $rootScope.serverURL + 'challenges/',
        params: {'type': 'notTaken', 'userID': AuthenticationService.getUserId()}
      }).success(function (data, status, headers, config) {
        $scope.challenges = $scope.challenges.concat(data);
      });
      $http({
        method: 'GET',
        url: $rootScope.serverURL + 'goals/',
        params: {'userID': AuthenticationService.getUserId()}
      }).success(function (data, status, headers, config) {
        $scope.challenges = $scope.challenges.concat(data);
      });
    };

    $scope.refresh();

    // Auto refresh
    $interval(function(){
        $scope.refresh();
    }, 60000);
});
