/**
 * Users page controller
 */
usersMdl.controller('usersCtrl', function ($scope, $http) {
    // filter bar variables
    $scope.sortOptions = {
        'nom': 'lastName',
        'prénom': 'firstName',
        'points': 'points'
    };
    $scope.sortBy = 'lastName';

    // TODO call server
    $http({method: 'GET', url: '/Ecoknowledge-client/stub-users.json'}).success(function(data, status, headers, config) {
        $scope.users = data;
    });
});