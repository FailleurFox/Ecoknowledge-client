/**
 * Profile page controller
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams, $http) {
    $scope.userId = $routeParams.profileId;
    // challenges selected
    $scope.selected = "badges";

    // challenges by category
    $scope.badges = [];
    $scope.nbBadges = 0;
    $scope.currentChallenges = [];

    // TODO call server
    $http({
        method: 'GET',
        url: '/Ecoknowledge-client/stub-users.json'
    }).success(function (data, status, headers, config) {
        for (var n in data) {
            var user = data[n];
            if (user.id == $scope.userId) {
                $scope.user = user;
                break;
            }
        }
    });
    $http({
        method: 'GET',
        url: '/Ecoknowledge-client/stub-badges.json'
    }).success(function (data, status, headers, config) {
        $scope.badges = data;

        for(var i=0; i<data.length; i++){
            var badge = data[i];
            $scope.badges[i] = badge;
            $scope.nbBadges+=badge.numberPossessed;
        }
    });
    $http({
        method: 'GET',
        url: '/Ecoknowledge-client/stub-challenges.json'
    }).success(function (data, status, headers, config) {
        for (var i=0; i<data.length; i++) {
            var challenge = data[i];
            if (challenge.progressPercent) {
                $scope.currentChallenges.push(challenge);
            }
        }
    });
});