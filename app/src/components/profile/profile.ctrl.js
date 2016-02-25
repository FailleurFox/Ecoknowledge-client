/**
 * Profile page controller
 */
profileMdl.controller('profileCtrl', function ($rootScope, $scope, $routeParams, $http) {
    $scope.userId = $routeParams.profileId;

    // category selected
    $scope.selected = 'badges';

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
                    'points': 'points',
                    'quantité obtenue':'numberPossessed'
                };
                $scope.sortBy = 'nameLevel';
                break;
            case 'current':
                $scope.sortOptions = {
                    'nom': 'name',
                    'points min.': 'levels[0].points',
                    'points max.': 'levels.slice(-1)[0].points',
                    '% temps': 'percentTime',
                    '% progression': 'percentProgress'
                };
                $scope.sortBy = 'name';
                break
        }
    };
    $scope.categorySelected();
    //*************************************************************

    $http({
        method: 'GET',
        url: $rootScope.serverURL + 'users/' + $scope.userId + "/profile"
    }).success(function (data, status, headers, config) {

        $scope.user = data;
    });
    $http({
        method: 'GET',
        url: $rootScope.serverURL + 'badges',
        params:{'userID':$scope.userId}
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
        url: $rootScope.serverURL + 'goals',
        params:{'userID':$scope.userId}
    }).success(function (data, status, headers, config) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var challenge = data[i];
            if (challenge.progressPercent) {
                $scope.currentChallenges.push(challenge);
            }
        }
    });
});
