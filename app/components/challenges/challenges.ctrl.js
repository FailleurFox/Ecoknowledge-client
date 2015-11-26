/**
 * Created by Hugo on 25/11/2015.
 */
challengesMdl.controller('challengesCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/Ecoknowledge-client/stub.json'}).success(function(data, status, headers, config) {
        $scope.challenges = data;
    });
});