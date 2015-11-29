/**
 * Profile page controller
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams, $http) {
    $scope.userId = $routeParams.profileId;
    // challenges selected
    $scope.selected="completed";

    // challenges by category
    $scope.challengesCompleted = [];
    $scope.currentChallenges = [];

    // TODO call server
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-users.json'}).success(function(data, status, headers, config) {
        for(var n in data){
            var user = data[n];
            if(user.id == $scope.userId){
                $scope.user = user;
                break;
            }
        }
    });
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-challenges.json'}).success(function(data, status, headers, config) {
        for(var n in data){
            var challenge = data[n];
            if(challenge.levelAcquired){
                $scope.challengesCompleted.push(challenge);
            }
            if(challenge.progressPercent){
                $scope.currentChallenges.push(challenge);
            }
        }
    });
});