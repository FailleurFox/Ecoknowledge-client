/**
 * Home page controller
 */
homeMdl.controller('homeCtrl', function ($scope, AuthenticationService) {
    $scope.isLoggedIn = AuthenticationService.isLoggedIn;
    // fill the developers list
    $scope.developers =
        [
            {
                "profilePic": "assets/img/benjamin_benni.jpg",
                "firstName": "Benjamin",
                "lastName": "Benni"
            },
            {
                "profilePic": "assets/img/sebastien_petillon.jpg",
                "firstName": "Sébastien",
                "lastName": "Pétillon"
            },
            {
                "profilePic": "assets/img/hugo_simond.jpg",
                "firstName": "Hugo",
                "lastName": "Simond"
            }];
});