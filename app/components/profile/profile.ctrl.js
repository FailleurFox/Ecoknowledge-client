/**
 * Created by Hugo on 25/11/2015.
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams, $http) {
    $scope.userId = $routeParams.profileId;
    $scope.selected="completed";

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