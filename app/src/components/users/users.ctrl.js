/**
 * Users page controller
 */
usersMdl.controller('usersCtrl', function ($rootScope, $scope, $http) {
    // filter bar variables
    $scope.sortOptions = {
        'nom': 'lastName',
        'prénom': 'firstName',
        'points': 'points'
    };
    $scope.sortBy = 'lastName';

    $http({method: 'GET', url: $rootScope.serverURL + 'users'}).success(function(data, status, headers, config) {
        $scope.users = data;
    });
});
