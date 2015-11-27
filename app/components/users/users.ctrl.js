/**
 * Created by Hugo on 25/11/2015.
 */
usersMdl.controller('usersCtrl', function ($scope, $http) {
    // TODO call server
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-users.json'}).success(function(data, status, headers, config) {
        $scope.users = data;
    });
});