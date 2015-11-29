/**
 * Created by Hugo on 25/11/2015.
 */
homeMdl.controller('homeCtrl', function ($scope, AuthenticationService) {
    $scope.isLoggedIn = AuthenticationService.isLoggedIn;
    $scope.developers =
        [
            {
                "profilePic": "assets/img/benjamin_benni.jpg",
                "firstName": "Benjamin",
                "lastName": "Benni"
            },
            {
                "profilePic": "assets/img/sebastien_petillon.jpg",
                "firstName": "Sebastien",
                "lastName": "Petillon"
            },
            {
                "profilePic": "assets/img/hugo_simond.jpg",
                "firstName": "Hugo",
                "lastName": "Simond"
            }];
});