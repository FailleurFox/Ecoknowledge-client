/**
 * Profile page controller
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams, $rootScope, $http) {
    $scope.userId = $routeParams.profileId;

    // category selected
    $scope.selected = 'badges'

    // challenges by category
    $scope.currentChallenges = [];
    $scope.badges = [];
    $scope.nbBadges = 0;

    // define the filterbar vars depending on the selected category
    $scope.categorySelected = function () {
        switch ($scope.selected) {
            case 'badges':
                $scope.sortOptions = {
                    'nom du badge': 'nameLevel',
                    'nom du défi': 'nameChallenge',
                    'points': 'points'
                };
                $scope.sortBy = 'nameLevel';
                break;
            case 'current':
                $scope.sortOptions = {
                    'nom': 'name',
                    'points min.': 'levels[0].points',
                    'points max.': 'levels[challenge.levels.length-1].points',
                    '% temps': 'percentTime',
                    '% progression': 'percentProgress'
                };
                $scope.sortBy = 'name';
                break
        }
    };
    $scope.categorySelected();
    //*************************************************************

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

        for (var i = 0; i < data.length; i++) {
            var badge = data[i];
            $scope.badges[i] = badge;
            $scope.nbBadges += badge.numberPossessed;
        }
    });
    $http({
        method: 'GET',
        url: '/Ecoknowledge-client/stub-challenges.json'
    }).success(function (data, status, headers, config) {
        for (var i = 0; i < data.length; i++) {
            var challenge = data[i];
            if (challenge.progressPercent) {
                $scope.currentChallenges.push(challenge);
            }
        }
    });
});