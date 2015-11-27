/**
 * Created by Hugo on 25/11/2015.
 */
homeMdl.controller('homeCtrl', function ($scope) {
    $scope.developers =
        [
            {
                "profilePic": "https://avatars0.githubusercontent.com/u/6167712?v=3&s=460",
                "firstName": "Benjamin",
                "lastName": "Benni"
            },
            {
                "profilePic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/027/094/0d6bce8.jpg",
                "firstName": "Sebastien",
                "lastName": "Petillon"
            },
            {
                "profilePic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAKeAAAAJDA0ZjIzNjNiLWY0NDgtNGZmZC05YjBjLWM0N2E3NTYxM2U3YQ.jpg",
                "firstName": "Hugo",
                "lastName": "Simond"
            }];
});