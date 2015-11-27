/**
 * Created by Hugo on 25/11/2015.
 */
challengesMdl.controller('challengesCtrl', function ($scope, $http) {
    // TODO call server
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-challenges.json'}).success(function(data, status, headers, config) {
        $scope.challenges = data;
    });
});