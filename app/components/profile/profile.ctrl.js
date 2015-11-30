/**
 * Profile page controller
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams, $http) {
    $scope.userId = $routeParams.profileId;
    // challenges selected
    $scope.selected = "completed";

    // challenges by category
    $scope.challengesCompleted = [];
    $scope.currentChallenges = [];
    $scope.allChallenges = [];

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
        url: '/Ecoknowledge-client/stub-challenges.json'
    }).success(function (data, status, headers, config) {
        for (var i=0; i<data.length; i++) {
            var challenge = data[i];
            if (challenge.levelAcquired) {
                $scope.challengesCompleted.push(challenge);
                var isAlreadyIn = false;
                for (var j=0; j<$scope.allChallenges.length; j++) {
                    var challenge2 = $scope.allChallenges[j];
                    if (challenge2.id == challenge.id) {
                        isAlreadyIn = true;
                        break;
                    }
                }
                if (!isAlreadyIn) {
                    $scope.allChallenges.push(challenge);
                }
            }
            if (challenge.progressPercent) {
                $scope.currentChallenges.push(challenge);
                var isAlreadyIn = false;
                for (var j=0; j<$scope.allChallenges.length; j++) {
                    var challenge2 = $scope.allChallenges[j];
                    if (challenge2.id == challenge.id) {
                        isAlreadyIn = true;
                        break;
                    }
                }
                if (!isAlreadyIn) {
                    $scope.allChallenges.push(challenge);
                }
            }
        }
    });
});