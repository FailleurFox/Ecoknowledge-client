/**
 * Created by Hugo on 25/11/2015.
 */
usersMdl.controller('usersCtrl', function ($scope, $http) {
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-users.json'}).success(function(data, status, headers, config) {
        $scope.users = data;
    });
});