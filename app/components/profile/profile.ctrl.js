/**
 * Created by Hugo on 25/11/2015.
 */
profileMdl.controller('profileCtrl', function ($scope, $routeParams) {
    $scope.userId = $routeParams.profileId;
});